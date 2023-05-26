import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from './HomePage.js'
import { BookingPage, ConfirmedBooking } from './Booking.js'
import { useReducer, } from 'react'

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        s = s * a % m;
        return s / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};


export function updateTimes(availableTimes , action) {
    const { date } = action
    if (date !== undefined)
        availableTimes = fetchAPI(new Date(date));
    //console.log("updateTimes date =", date, "times =", availableTimes)
    return availableTimes;
}

export function initializeTimes() {
    return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
    ]
}


export function Main(props) {

    const [ availableTimes, dispatchAvailableTimes ] = useReducer(updateTimes, initializeTimes())
    const navigate = useNavigate()

    function submitForm(formData) {
        if (submitAPI(formData))
            navigate("/booking-confirmation")
    }

    return <main>
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/booking" element={<BookingPage {...{availableTimes, dispatchAvailableTimes, submitForm}}/ >}></Route>
            <Route path="/booking-confirmation" element={<ConfirmedBooking />}></Route>
            </Routes>
    </main>
}