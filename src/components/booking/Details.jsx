import React from 'react'
//booking context
import { useBooking } from '../../context/BookingContext'


export default function Details() {
  const { formik } = useBooking()

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
          formik.touched.fName && <span>{formik.errors.fName}</span>
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
          formik.touched.lName && <span>{formik.errors.lName}</span>
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
          formik.touched.email && <span>{formik.errors.email}</span>
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
          formik.touched.phone && <span>{formik.errors.phone}</span>
        }
      </div>
    </div>
  )
}
