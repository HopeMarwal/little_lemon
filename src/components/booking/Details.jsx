import React from 'react'
//booking context
import { useBooking } from '../../context/BookingContext'


export default function Details() {
  const { formData, handleChange } = useBooking()


  const handleChangeInput = (e) => {
    let property = e.target.name
    let value = e.target.value

    handleChange(property, value)
    console.log(formData)
  }
  return (
    <div className='form details'>
      <div className='field'>
        <label htmlFor='fName'>First name<span>*</span></label>
        <input
          type="text"
          id="fName"
          name="fName"
          value={formData.fName}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field'>
        <label htmlFor='lName'>Last name<span>*</span></label>
        <input
          type="text"
          id="lName"
          name="lName"
          value={formData.lName}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field'>
        <label htmlFor='email'>Email<span>*</span></label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChangeInput}
        />
      </div>

      <div className='field'>
        <label htmlFor='phone'>Phone number (optional)</label>
        <input
          type="text"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChangeInput}
        />
      </div>
    </div>
  )
}
