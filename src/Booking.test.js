import { render, screen, fireEvent } from "@testing-library/react"
import { BookingForm } from './Booking.js'

test ('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={["17:00"]}/>)
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

