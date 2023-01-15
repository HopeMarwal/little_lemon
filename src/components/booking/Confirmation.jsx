//context
import { useState } from 'react';
import { useBooking } from '../../context/BookingContext'
//api
import { submitAPI } from '../../dataApi/fetchData';

export default function Confirmation() {
  const { formik } = useBooking()
  const [isFormSubmited, setIsFormSubmited] = useState(false)

  const handleClick = (e) => {
    e.preventDefault()
    //handle submit form & validate form
    const response = submitAPI(formik.values)
    setIsFormSubmited(response)
  }

  return (
    <div className='form confirmation'>
      { isFormSubmited && <span className='notification'>Your reservation has been submited! Thank you for your choise!</span>}
      <div className='property'>Your name:</div>
      <div className='value'>{formik.values.fName} {formik.values.lName}</div>

      <div className='property'>Your email:</div>
      <div className='value'>{formik.values.email}</div>

      <div className='property'>Your phone:</div>
      <div className='value'>{formik.values.phone}</div>

      <div className='property'>Date:</div>
      <div className='value'>{formik.values.date}</div>

      <div className='property'>Time:</div>
      <div className='value'>{formik.values.time}</div>

      <div className='property'>Number of diners:</div>
      <div className='value'>{formik.values.numOfDiners}</div>

      <div className='property'>Occasion:</div>
      <div className='value'>{formik.values.occasion}</div>

      <div className='property'>Outside table:</div>
      <div className='value'>{formik.values.isOutsideTable ? 'Yes' : 'No'}</div>

      <button className='btn' onClick={handleClick} disabled={!formik.isValid}>
         Submit
      </button>

    </div>
  )
}
