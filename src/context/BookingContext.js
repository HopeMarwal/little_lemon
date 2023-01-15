import { createContext, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const BookingContext = createContext()

export const BookingProvider = ({children}) => {

  const validDate = new Date()
  validDate.setDate(validDate.getDate() + 1)

  const formik = useFormik({
    initialValues: {
      date: validDate.toISOString().slice(0, 10),
      time: 'none',
      numOfDiners: 2,
      isOutsideTable: false,
      occasion: null,
      fName: '',
      lName: '',
      email: '',
      phone: ''
    },
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      date: Yup.date().required('Choose date').min(validDate.toISOString().slice(0, 10), 'This date is not avaible'),
      numOfDiners: Yup.number().min(1, 'Error number').max(16, 'Maximum 16 people'),
      fName: Yup.string().required('Required'),
      lName: Yup.string().required('Required'),
      email: Yup.string().required('Required').email('Invalid email address'),
    }),
  });

  return (
    <BookingContext.Provider value={{formik}}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)