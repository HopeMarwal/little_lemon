import React, { useEffect, useState } from 'react'

export default function FormErrorMessage({error, test, display}) {
  const [style, setStyle] = useState({display: 'none'})

  useEffect(() => {
    if(display) {
      setStyle({display: 'block'})
    } else {
      setStyle({display: 'none'})
    }
  }, [display])

  return (
    <div className='error' style={style}>
      <span data-testid={test} className='error_msg'>{error}</span>
    </div>
  )
}
