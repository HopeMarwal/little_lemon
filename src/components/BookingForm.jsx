import React, { useState } from 'react'
//components
import Customize from './booking/Customize';
import Confirmation from './booking/Confirmation';
import Details from './booking/Details';
//style
import '../assets/scss/form.scss';
//context
import { useBooking } from '../context/BookingContext';
//api
import { submitAPI } from '../dataApi/fetchData';


export default function BookingForm({step, setStep}) {

  const { formik } = useBooking()

  const [isFormSubmited, setIsFormSubmited] = useState(false)

  const isDisabled = () => {
    if(step === 1) {
      if(formik.errors.date || formik.errors.numOfDiners) {
        return true
      }
    }
    if(step === 2) {
      if(formik.errors.fName || formik.errors.lName || formik.errors.email ) {
        return true
      }
    }
    return false
  }

  const handleClick = (e) => {
    e.preventDefault()
    formik.validateForm()

    if(step !== 3) {
      //handle next step
      setStep(prev => prev + 1)
    } else {
      //handle submit form
      const response = submitAPI(formik.values)
      setIsFormSubmited(response)
    }
  }
  return (
    <form>
      { isFormSubmited && <span className='notification'>Your reservation has been submited! Thank you for your choise!</span>}
      { step === 1 ?  <Customize /> : step === 2 ? <Details /> :<Confirmation /> }
      <button className='btn' onClick={handleClick} disabled={isDisabled()}>
        {step !== 3 ? 'Next' : 'Submit'}
      </button>
    </form>
  )
}
