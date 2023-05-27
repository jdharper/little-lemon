import { render, screen, fireEvent } from "@testing-library/react"
import { BookingPage, BookingForm } from './Booking.js'

test ('Renders the BookingForm heading', () => {
    render(<BookingPage availableTimes={["17:00"]}/>)
    const headingElement = screen.getByText("Book Now")
    expect(headingElement).toBeInTheDocument();
})

test ('<select> time element has availableTimes', () => {
    render(<BookingForm availableTimes={["17:00"]}/>)
    const timeElement = screen.getByLabelText("Choose time*")
    const timeOptions = timeElement.children;
    expect(timeOptions.length).toBe(2);
    expect(timeOptions[0].tagName).toBe('OPTION')
    expect(timeOptions[0].textContent).toBe('-- Select a time --')
    expect(timeOptions[1].tagName).toBe('OPTION')
    expect(timeOptions[1].textContent).toBe('17:00')
})

test ('Validation: All fields are valid when form initially renders', () => {
    render(<BookingPage/>)
    const labels = [ 'Name*', 'Choose date*', 'Choose time*', 'Number of guests*' ]
    for (const label of labels) {
        const formElement = screen.getByLabelText(label)
        const parent = formElement.parentElement;
        expect(parent.className).toBe('formField')
    }
})

test ('Validation: Make fields invalid on submit', () => {
    /* If submit button clikced without entering any data in the form, Name,
       Date, and Number of Guests will be marked invalid */
    render(<BookingPage/>)
    const submit = screen.getByText("Make Your Reservation")
    fireEvent.click(submit)
    const labels = [ 'Name*', 'Choose date*', 'Number of guests*' ]
    for (const label of labels) {
        const formElement = screen.getByLabelText(label)
        const parent = formElement.parentElement;
        expect(parent.className).toBe('formField invalid')
    }
})

/*
function change(e) {
    e.preventDefault()
    const { name, value } = e.target
    //console.log('change', name, '=', value)

    const newBooking = { ...booking, [name]: value }

    // When the date changes, clear the time.
    if (name === 'date' && value !== booking.date) {
       newBooking['time'] = ""
    }
    setBooking( newBooking )
 }
*/
test ('Validation: Name field', () => {
    /* If a field looses focus without a value being entered, it should be marked invalid */
    render(<BookingPage/>)
    const formElement = screen.getByLabelText('Name*')
    const parent = formElement.parentElement;

    /* At first the field should be valid */
    expect(parent.className).toBe('formField')

    /* If the field looses focus wihtout anything entered it becomes invalid */
    fireEvent.blur(formElement)
    expect(parent.className).toBe('formField invalid')

    /* Once a values is added, it becomes valid again */
    fireEvent.change(formElement, { target : { name: "name", value: "Bob" }})
    expect(parent.className).toBe('formField')
})

test ('Validation: Date field', () => {
    /* If a field looses focus without a value being entered, it should be marked invalid */
    render(<BookingPage/>)
    const formElement = screen.getByLabelText('Choose date*')
    const parent = formElement.parentElement;

    /* At first the field should be valid */
    expect(parent.className).toBe('formField')

    /* If the field looses focus without anything entered it becomes invalid */
    fireEvent.blur(formElement)
    expect(parent.className).toBe('formField invalid')

    /* Once a values is added, it becomes valid again */
    fireEvent.change(formElement, { target : { name: "date", value: "2023-06-01" }})
    expect(parent.className).toBe('formField')

})

test ('Validation: Guests field', () => {
    /* If a field looses focus without a value being entered, it should be marked invalid */
    render(<BookingPage/>)
    const formElement = screen.getByLabelText('Number of guests*')
    const parent = formElement.parentElement;

    /* At first the field should be valid */
    expect(parent.className).toBe('formField')

    /* If the field looses focus without anything entered it becomes invalid */
    fireEvent.blur(formElement)
    expect(parent.className).toBe('formField invalid')

    /* Once a values is added, it becomes valid again */
    fireEvent.change(formElement, { target : { name: "guests", value: "3" }})
    expect(parent.className).toBe('formField')
})

test ('Validation: Time field', () => {
    /* If a field looses focus without a value being entered, it should be marked invalid */
    render(<BookingPage availableTimes = {["17:00"]}/>)

    /* To enter a time, date must already be entered.  So, enter a date first. */
    const dateElement = screen.getByLabelText('Choose date*')
    fireEvent.change(dateElement, { target : { name: "date", value: "2023-06-01" }})

    const formElement = screen.getByLabelText('Choose time*')
    const parent = formElement.parentElement;

    /* At first the field should be valid */
    expect(parent.className).toBe('formField')

    /* If the field looses focus without anything entered it becomes invalid */
    fireEvent.blur(formElement)
    expect(parent.className).toBe('formField invalid')

    /* Once a values is added, it becomes valid again */
    fireEvent.change(formElement, { target : { name: "time", value: "17:00" }})
    expect(parent.className).toBe('formField')
})