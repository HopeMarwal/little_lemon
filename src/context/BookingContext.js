import { createContext, useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
//api
import { fetchAPI } from '../dataApi/fetchData'

const BookingContext = createContext()

export const BookingProvider = ({children}) => {

  const validDate = new Date()
  validDate.setDate(validDate.getDate() + 1)

  const [options, setOptions] = useState(fetchAPI(new Date(validDate)))

  const formik = useFormik({
    initialValues: {
      date: validDate.toISOString().slice(0, 10),
      time: options[0],
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
      time: Yup.string().oneOf(options, 'The time you chose is not avaible'),
      fName: Yup.string().required('First name is required').max(20, 'Max 20 symbols'),
      lName: Yup.string().required('Last name is required').max(30, 'Max 30 symbols'),
      email: Yup.string().required('Email is required').email('Invalid email address'),
    }),
  });

  //Side effect
  useEffect(() => {
      const dateFormat = new Date(formik.values.date)
      const data = fetchAPI(dateFormat)
      setOptions(data)
  }, [formik.values.date])

  return (
    <BookingContext.Provider value={{formik, options}}>
      {children}
    </BookingContext.Provider>
  )
}

export const useBooking = () => useContext(BookingContext)