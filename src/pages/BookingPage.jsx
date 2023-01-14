//style
import { useState } from 'react'
import '../assets/scss/booking.scss'
//components
import BookingForm from '../components/BookingForm'
//booking context
import { BookingProvider } from '../context/BookingContext'
//import { useBooking } from '../context/BookingContext'

export default function BookingPage() {
  const [step, setStep] = useState(0)

  return (
    <BookingProvider>
      <>
        <header>
          <div className='booking-page'></div>
        </header>
        <BookingForm step={step} setStep={setStep} />
      </>
    </BookingProvider>
  )
}
