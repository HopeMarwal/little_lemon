import React, { useEffect, useState } from 'react'
//component
import FormErrorMessage from './FormErrorMessage'
//booking context
import { useBooking } from '../../context/BookingContext'
//icons
import { FaGlassCheers } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
//api
import { fetchAPI } from '../../dataApi/fetchData'

export default function Customize() {
  //State
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState([])

  //Context
  const { formik } = useBooking()

  //Side effect
  useEffect(() => {
    const dateFormat = new Date(formik.values.date)
    const data = fetchAPI(dateFormat)
    setOptions(data)
  }, [formik.values.date])


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
          formik.touched.date && <span>{formik.errors.date}</span>
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
          <option value="none">Please choose an option</option>
          {mapOption}
        </select>
        {
          formik.touched.time && <span>{formik.errors.time}</span>
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
          formik.touched.numOfDiners && <span>{formik.errors.numOfDiners}</span>
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
    </div>
  )
}
