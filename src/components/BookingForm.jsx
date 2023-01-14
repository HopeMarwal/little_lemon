import React from 'react'
//yup
import * as Yup from 'yup';
//components
import Customize from './booking/Customize';
//style
import '../assets/scss/form.scss';

export default function BookingForm(props) {
  return (
    <form>
      <Customize />
      <button className='btn'>Next</button>
    </form>
  )
}
