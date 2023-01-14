//react
import { useState } from 'react'
//style
import '../assets/scss/booking.scss'
//components
import BookingForm from '../components/BookingForm';
import BookingHeader from '../components/booking/BookingHeader';
//booking context
import { BookingProvider } from '../context/BookingContext'


export default function BookingPage() {


  const [step, setStep] = useState(1)

  return (
    <BookingProvider>
      <>
        <BookingHeader step={step} setStep={setStep} />
        <BookingForm step={step} setStep={setStep} />
      </>
    </BookingProvider>
  )
}
