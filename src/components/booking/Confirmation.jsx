//context
import { useBooking } from '../../context/BookingContext'

export default function Confirmation() {
  const { formData } = useBooking()
  return (
    <div className='form confirmation'>
      <div className='property'>Your name:</div>
      <div className='value'>{formData.fName} {formData.lName}</div>

      <div className='property'>Your email:</div>
      <div className='value'>{formData.email}</div>

      <div className='property'>Your phone:</div>
      <div className='value'>{formData.phone}</div>

      <div className='property'>Date:</div>
      <div className='value'>{formData.date}</div>

      <div className='property'>Time:</div>
      <div className='value'>{formData.time}</div>

      <div className='property'>Number of diners:</div>
      <div className='value'>{formData.numOfDiners}</div>

      <div className='property'>Occasion:</div>
      <div className='value'>{formData.occasion}</div>

      <div className='property'>Outside table:</div>
      <div className='value'>{formData.outside ? 'Yes' : 'No'}</div>

    </div>
  )
}
