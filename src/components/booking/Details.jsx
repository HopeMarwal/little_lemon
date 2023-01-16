import React, { useEffect, useState } from 'react'
//booking context
import { useBooking } from '../../context/BookingContext'
import FormErrorMessage from './FormErrorMessage'


export default function Details({step, setStep}) {
  const { formik } = useBooking()

  //event handlers
  const handleClick = (e) => {
    e.preventDefault()
    if(formik.isValid && step === 2) {
      setStep(prev => prev + 1)
    }
  }

  return (
    <div className='form details'>
      <div className='field'>
        <label htmlFor='fName'>First name<span>*</span></label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={formik.values.fName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.fName && <FormErrorMessage error={formik.errors.fName} />
        }
      </div>

      <div className='field'>
        <label htmlFor='lName'>Last name<span>*</span></label>
        <input
          type="text"
          id="lName"
          name="lName"
          value={formik.values.lName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.lName && <FormErrorMessage error={formik.errors.lName} />
        }
      </div>

      <div className='field'>
        <label htmlFor='email'>Email<span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.email && <FormErrorMessage error={formik.errors.email} />
        }
      </div>

      <div className='field'>
        <label htmlFor='phone'>Phone number (optional)</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.phone && <FormErrorMessage error={formik.errors.phone} />
        }
      </div>

      <button className='btn' aria-label="On Click" onClick={handleClick} disabled={!formik.isValid}>Next</button>
    </div>
  )
}
