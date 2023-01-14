import React, { useState } from 'react'
//component
import FormErrorMessage from './FormErrorMessage'
//booking context
import { useBooking } from '../../context/BookingContext'

//icons
import { FaGlassCheers } from 'react-icons/fa'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

export default function Customize() {
  const { formData, handleChange } = useBooking()

  const [isOpen, setIsOpen] = useState(false)

  const handleChangeInput = (e) => {
    let property = e.target.name
    let value = e.target.value

    if(property === 'isOutsideTable') {
      value = !formData.isOutsideTable
    }

    if(e.target.dataset.name === 'occasion') {
      property = e.target.dataset.name;
      value = e.target.textContent
      setIsOpen(false)
    }

    handleChange(property, value)
  }

  const options = [
    {
      value: '5PM',
      text: '17:00'
    },
    {
      value: '6PM',
      text: '18:00'
    },
    {
      value: '7PM',
      text: '19:00'
    },
    {
      value: '8PM',
      text: '20:00'
    },
    {
      value: '9PM',
      text: '21:00'
    },
    {
      value: '10PM',
      text: '22:00'
    },
  ]

  const mapOption = options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      )
    })

  const occationNull = <><FaGlassCheers />Occasion<IoIosArrowDown /></>

  const occasionSelected = <><FaGlassCheers />{formData.occasion}<IoIosArrowUp /></>
  return (
    <div className='form customize'>

      <div className='field'>
        <label htmlFor='date'>Date<span>*</span></label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field'>
        <label htmlFor='Time'>Time<span>*</span></label>
        <select
          name="time"
          id="time"
          onChange={handleChangeInput}
          value={formData.time}
        >
          {mapOption}
        </select>
        </div>

        <div className='field'>
        <label htmlFor='numOfDiners'>Number of diners<span>*</span></label>
        <input
          type="number"
          id="numOfDiners"
          name="numOfDiners"
          value={formData.numOfDiners}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field check'>
        <label htmlFor='outside'>Outside table
        <div className="container">
          <input
            type="checkbox"
            id="outside"
            name="isOutsideTable"
            checked={formData.isOutsideTable}
            onChange={handleChangeInput}
          />
          <span className="checkmark"></span>
        </div>
        </label>
      </div>

      <div className='field occasion'>
        <div className={formData.occasion === null ? 'title' : 'title selected'} onClick={() => setIsOpen(!isOpen)}>
          { formData.occasion === null
            ? occationNull
            : occasionSelected
          }
        </div>
        <div className={ isOpen ? "options open" : 'options'}>
          <div
            className="option"
            onClick={handleChangeInput}
            data-name="occasion"
          >
            birthday
          </div>
          <div
            className="option"
            onClick={handleChangeInput}
            data-name="occasion"
          >
            engagement
          </div>
          <div
            className="option"
            onClick={handleChangeInput}
            data-name="occasion"
          >
            anniversary
          </div>
          <div
            className="option"
            onClick={handleChangeInput}
            data-name="occasion"
          >
            other
          </div>
        </div>
      </div>
    </div>
  )
}
