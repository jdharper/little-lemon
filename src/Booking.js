import { useState, useEffect, cloneElement } from "react";

export function ConfirmedBooking() {
   return <p>Your booking is confirmed.</p>
}

function Field(props) {
   const { validationMsg, valid, children } = props
   //console.log("valid =", valid)

   //console.log('child props =', props.children[0].props)
   const fieldId = children.props.id
   const disabled = children.props.disabled

   const [ touched, setTouched ] = useState( props.touched === undefined ? false : (!!props.touched))
   useEffect(() => {
      setTouched(props.touched)
   }, [props.touched])
   const classNames = "formField" + (valid || !touched || disabled ? "" : " invalid")

   function doBlur(e) {
      setTouched(true)
   }
   const newChild = cloneElement(children, {onBlur : doBlur})

   return <div className={classNames} >
      {newChild}
      <label htmlFor={fieldId} className="validationMsg">{validationMsg}</label>
   </div>
}

export function BookingForm(props) {
   const { dispatchAvailableTimes, submitForm } = props

   const availableTimes = props.availableTimes || []

   const [ booking, setBooking ] = useState({
      name: "",
      date: "",
      time: "",
      guests: "",
      occasion: "None",
   })

   const [ submitAttempted, setSubmitAttempted ] = useState(false)

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

   useEffect(() => {
      if (dispatchAvailableTimes !== undefined)
         dispatchAvailableTimes({date: booking.date})
   }, [booking.date, dispatchAvailableTimes])

   const validateName = () => booking.name.length > 0
   const validateDate = () => booking.date.length > 0
   const validateTime = () => booking.time.length > 0

   function validateGuests() {
      const n = 1 * booking.guests;
      //console.log("guests = ", booking.guests)
      return n > 0 && n <= 10
   }

   function formValid() {
      return validateName()
         && validateDate()
         && validateTime()
         && validateGuests()
   }

   function submit(e) {
      e.preventDefault();
      //console.log("doSetSubmitAttmped")
      setSubmitAttempted(true)
      if (formValid()) {
         if (submitForm !== undefined)
            submitForm(booking);
      }
   }


   //console.log("validateTime =", validateTime(), booking.timeTouch, booking.time, booking.time.length)
   //console.log("time =", booking.time, booking.timeTouch)

   //style={{display: 'grid', max_width: '200px', gap: '20px'}}
   //console.log("submitAttempted =", submitAttempted)
   return  <div className="booking">
      <form className='booking-form' onSubmit={submit} >
         <label htmlFor="name">Name<sup>*</sup></label>
         <Field validationMsg="Name Required" valid={validateName()} touched={submitAttempted}>
            <input type="text" id="name" name="name" value={booking.name} onChange={change}/>
         </Field>
         <label htmlFor="res-date">Choose date<sup>*</sup></label>
         <Field validationMsg="Date Required" valid={validateDate()} touched={submitAttempted}>
            <input type="date" id="res-date" name="date" value={booking.date} onChange={change} />
         </Field>
         <label htmlFor="res-time">Choose time<sup>*</sup></label>
         <Field validationMsg="Time Required" valid={validateTime()} touched={submitAttempted}>
            <select disabled={ ! validateDate()} id="res-time" name="time" value={booking.time} onChange={change}>
            { (() => {
               if (availableTimes.length === 0) {
                  if (booking.date === "")
                     return <option disabled value="">Select a date to see available times</option>
                  else
                     return <option value="">-- Select a different date --</option>
               }
               return <option disabled value="">-- Select a time --</option>
            })()
            }
            { availableTimes.map(t => <option key={t}>{t}</option>) }
            </select>
         </Field>
         <label htmlFor="guests">Number of guests<sup>*</sup></label>
         <Field validationMsg="Select between 1 and 10 guests." valid={validateGuests()} touched={submitAttempted}>
            <input type="number" placeholder="Number of Guests" min="1" max="10" id="guests" name="guests" value={booking.guests} onChange={change}/>
         </Field>
         <label htmlFor="occasion">Occasion</label>
         <select id="occasion" value={booking.occasion}  name="occasion" onChange={change}>
            <option>None</option>
            <option>Birthday</option>
            <option>Anniversary</option>
         </select>
         <input invalid={formValid() ? "false" : "true"} type="submit" value="Make Your Reservation" aria-label="On Click"/>
      </form>
      </div>
}

export function BookingHero(props) {
   return <section className="hero booking" style={{marginBottom: 0}}>
   <div className="hero-left">
      <h1 style={{marginBottom: "10px"}}>Book Now</h1>
      <p>Experience vibrant Mediterranean cuisine. Reserve your spot, where every bite is a celebration of taste and culture.</p>
   </div>
   <img className="hero-right" alt="Reserved Table" />
   </section>
}
export function BookingPage(props) {
    return <>
      <BookingHero/>
      <BookingForm {...props}/>
   </>
}