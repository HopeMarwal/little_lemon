import React from 'react'
//yup
import * as Yup from 'yup';
//components
import Customize from './booking/Customize';
import Confirmation from './booking/Confirmation';
import Details from './booking/Details';
//style
import '../assets/scss/form.scss';


export default function BookingForm({step, setStep}) {

  const handleClick = (e) => {
    e.preventDefault()
    if(step !== 3) {
      setStep(prev => prev + 1)
    }
    //handle submit form
  }
  return (
    <form>
      {
        step === 1
        ?  <Customize />
        : step === 2
          ? <Details />
          :<Confirmation />
      }
      <button className='btn' onClick={handleClick}>
        {step !== 3 ? 'Next' : 'Submit'}
      </button>
    </form>
  )
}
