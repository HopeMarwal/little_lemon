import { createContext, useContext, useState } from "react";

const BookingContext = createContext()

export const BookingProvider = ({children}) => {
  // const initialState = {
  //   date: new Date().toISOString().slice(0, 10),
  //   time: '12:00',
  //   numOfDiners: 2,
  //   isOutsideTable: false,
  //   occasion: null,
  //   fName: '',
  //   lName: '',
  //   email: '',
  //   phone: ''
  // }
  const [formData, setFormData] = useState({
    date: new Date().toISOString().slice(0, 10),
    time: '5PM',
    numOfDiners: 2,
    isOutsideTable: false,
    occasion: null,
    fName: '',
    lName: '',
    email: '',
    phone: ''
  })

  const handleChange = (property, value) => {
    setFormData({
      ...formData,
      [property]: value
    })
  }

  return (
    <BookingContext.Provider value={{formData, handleChange}}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)