import { useState, useEffect } from "react";

export function ConfirmedBooking() {
   return <p>Your booking is confirmed.</p>
}

export function BookingForm(props) {
   const { availableTimes, dispatchAvailableTimes, submitForm } = props

   const [ booking, setBooking ] = useState({
      date: "",
      time: "",
      guests: 1,
      occasion: "None",
   })

   function change(e) {
      e.preventDefault()
      const { name, value } = e.target
      setBooking( { ...booking, [name]: value} )
   }

   useEffect(() => {
      if (dispatchAvailableTimes !== undefined)
         dispatchAvailableTimes({date: booking.date})
   }, [booking.date, dispatchAvailableTimes])

   // useEffect(() => {
   //    console.log("availableTimes =", availableTimes)
   // }, [availableTimes])

   function submit() {
      if (submitForm !== undefined)
         submitForm(booking);
   }

   return <form style={{display: 'grid', max_width: '200px', gap: '20px'}}>
         <h1>Book Now</h1>
         <label htmlFor="res-date">Choose date</label>
         <input type="date" id="res-date" name="date" value={booking.date} onChange={change} />
         <label htmlFor="res-time">Choose time</label>
         <select id="res-time" name="time" value={booking.time} onChange={change}>
            {availableTimes.map(t => <option key={t}>{t}</option>)}
         </select>
         <label htmlFor="guests">Number of guests</label>
         <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={booking.guests} onChange={change}/>
         <label htmlFor="occasion">Occasion</label>
         <select id="occasion" value={booking.occasion}  name="occasion" onChange={change}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input type="submit" value="Make Your reservation" onClick={submit} />
      </form>
}

export function BookingPage(props) {
    return  <>
    <main>
      <BookingForm {...props}/>
    </main>

    </>
}