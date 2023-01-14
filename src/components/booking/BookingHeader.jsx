import React from 'react'
import { useBooking } from '../../context/BookingContext'

export default function BookingHeader({step, setStep}) {

  const { formik } = useBooking()
  const handleChangeStep = (val) => {
    formik.validateForm()
    if(val === 1) {
      setStep(1)
    }
    if(val === 2) {
      if(formik.errors.date || formik.errors.numOfDiners) {
        return
      } else {
        setStep(2)
      }
    }
    if(val === 3) {
      if(formik.errors.fName || formik.errors.lName || formik.errors.email ) {
        return
      } else {
        setStep(3)
      }
    }
  }
  return (
    <header>
    <div className='booking-page'>
      <h1>Reserve a table</h1>
      <h3>Step {step} of 3</h3>
      <div className='banner'></div>
      <div className="progress">
        <p>Customize your reservation</p>
        <div className='progress_bar'>

          <div
            onClick={() => handleChangeStep(1)}
            className={step >= 1 ? "num active" : "num"}
          >1</div>
          <div className={step >= 2 ? "bar active" : "bar"}></div>

          <div
            onClick={() => handleChangeStep(2)}
            className={step >= 2 ? "num active" : "num"}
          >2</div>
          <div className={step >= 3 ? "bar active" : "bar"}></div>

          <div
            onClick={() => handleChangeStep(3)}
            className={step >= 3 ? "num active" : "num"}
          >3</div>

        </div>
      </div>
    </div>
  </header>
  )
}
