import React from 'react'

export default function FormErrorMessage({error}) {
  return (
    <div className='error'>
      <span className='error_msg'>{error}</span>
    </div>
  )
}
