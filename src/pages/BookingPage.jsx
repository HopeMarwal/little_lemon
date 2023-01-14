//react
import { useState } from 'react'
//style
import '../assets/scss/booking.scss'
//components
import BookingForm from '../components/BookingForm'
//booking context
import { BookingProvider } from '../context/BookingContext'
//import { useBooking } from '../context/BookingContext'

export default function BookingPage() {
  const [step, setStep] = useState(1)

  return (
    <BookingProvider>
      <>
        <header>
          <div className='booking-page'>
            <h1>Reserve a table</h1>
            <h3>Step {step} of 3</h3>
            <div className='banner'></div>
            <div className="progress">
              <p>Customize your reservation</p>
              <div className='progress_bar'>

                <div
                  onClick={() => setStep(1)}
                  className={step >= 1 ? "num active" : "num"}
                >1</div>
                <div className={step >= 2 ? "bar active" : "bar"}></div>

                <div
                  onClick={() => setStep(2)}
                  className={step >= 2 ? "num active" : "num"}
                >2</div>
                <div className={step >= 3 ? "bar active" : "bar"}></div>

                <div
                  onClick={() => setStep(3)}
                  className={step >= 3 ? "num active" : "num"}
                >3</div>

              </div>
            </div>
          </div>
        </header>
        <BookingForm step={step} setStep={setStep} />
      </>
    </BookingProvider>
  )
}
