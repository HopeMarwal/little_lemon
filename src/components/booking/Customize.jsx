import React, { useState } from 'react'
//component
import FormErrorMessage from './FormErrorMessage'
//booking context
import { useBooking } from '../../context/BookingContext'

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

  const mapOption = () => {
    return options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.text}
        </option>
      )
    })
  }
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
          {mapOption()}
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

      <div className='field'>
        <label htmlFor='outside'>Outside table<span>*</span></label>
        <input
          type="checkbox"
          id="outside"
          name="isOutsideTable"
          checked={formData.isOutsideTable}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field'>
        <div>Occasion</div>
        <div className={ isOpen ? "options open" : 'options hide'}>
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
