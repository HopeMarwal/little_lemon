import React, { useEffect, useState } from 'react'
//component
import FormErrorMessage from './FormErrorMessage'
//booking context
import { useBooking } from '../../context/BookingContext'
//icons
import { FaGlassCheers } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Customize({step, setStep}) {
  //State
  const [isOpen, setIsOpen] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)

  //Context
  const { formik, options } = useBooking()

  useEffect(() => {
    if(formik.touched.date && formik.errors.date || formik.touched.numOfDiners && formik.errors.numOfDiners || formik.touched.time && formik.errors.time) {
      setIsDisabled(true)
    } else {
      setIsDisabled(false)
    }
  }, [formik.values.date, formik.values.time, formik.values.numOfDiners])

  //event handlers
  const handleClick = (e) => {
    e.preventDefault()
    if(!isDisabled && step === 1) {
      formik.validateForm()
      setStep(prev => prev + 1)
    }
  }

  //jsx expressions
  const mapOption = options?.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      )
  })

  const validDate = new Date()
  validDate.setDate(validDate.getDate() + 1)


  const occationNull = <><FaGlassCheers />Occasion<IoIosArrowDown /></>
  const occasionSelected = <><FaGlassCheers />{formik.values.occasion}<IoIosArrowUp /></>

  return (
    <div className='form customize'>
      <div className='field'>
        <label htmlFor='date'>Date<span>*</span></label>
        <input
          type="date"
          id="date"
          name="date"
          min={validDate.toISOString().slice(0, 10)}
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.date && <FormErrorMessage error={formik.errors.date} />
        }
      </div>

      <div className='field'>
        <label htmlFor='Time'>Time<span>*</span></label>
        <select
          name="time"
          id="time"
          onChange={formik.handleChange}
          value={formik.values.time}
          onBlur={formik.handleBlur}
          required
        >
          {mapOption}
        </select>
        {
          formik.touched.time && <FormErrorMessage error={formik.errors.time} />
        }
        </div>

        <div className='field'>
        <label htmlFor='numOfDiners'>Number of diners<span>*</span></label>
        <input
          type="number"
          id="numOfDiners"
          name="numOfDiners"
          min="1"
          max="16"
          value={formik.values.numOfDiners}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {
          formik.touched.numOfDiners && <FormErrorMessage error={formik.errors.numOfDiners} />
        }
      </div>

      <div className='field check'>
        <label htmlFor='outside'>Outside table
        <div className="container">
          <input
            type="checkbox"
            id="outside"
            name="isOutsideTable"
            checked={formik.values.isOutsideTable}
            onChange={formik.handleChange}
          />
          <span className="checkmark"></span>
        </div>
        </label>
      </div>

      <div className='field occasion'>
        <div className={formik.values.occasion === null ? 'title' : 'title selected'} onClick={() => setIsOpen(!isOpen)}>
          { formik.values.occasion === null
            ? occationNull
            : occasionSelected
          }
        </div>
        {/* Custom select */}
        <div className="hide">
          <input
            name="occasion"
            type="radio"
            value="birthday"
            id="birthday"
            onChange={formik.handleChange}
          />
          <input
            name="occasion"
            type="radio"
            value="anniversary"
            id="anniversary"
            onChange={formik.handleChange}
          />
          <input
            name="occasion"
            type="radio"
            value="engagement"
            id="engagement"
            onChange={formik.handleChange}
          />
          <input
            name="occasion"
            type="radio"
            value="other"
            id="other"
            onChange={formik.handleChange}
          />
        </div>
        <div className={ isOpen ? "options open" : 'options'}>
          <label onClick={()=> setIsOpen(false)} className='option' htmlFor='birthday'>birthday</label>
          <label onClick={()=> setIsOpen(false)} className='option' htmlFor='anniversary'>anniversary</label>
          <label onClick={()=> setIsOpen(false)} className='option' htmlFor='engagement'>engagement</label>
          <label onClick={()=> setIsOpen(false)} className='option' htmlFor='other'>other</label>
        </div>
      </div>

      <button className='btn' onClick={handleClick} disabled={isDisabled}>Next</button>
    </div>
  )
}
