import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Details from '../Details'
import { BookingProvider } from '../../../context/BookingContext'

const MockComponent = () => {
  return (
    <BookingProvider>
      <Details />
    </BookingProvider>
  )
}

describe('Details', () => {
  beforeEach(() => {
    render(<MockComponent />);
  });

  describe('First name input', () => {
    it('should render input fName element', () => {
      const inputElement = screen.getByLabelText('First name*')
      expect(inputElement).toBeInTheDocument()
    });
    it('should be able to set first name value', async () => {
      const inputElement = screen.getByLabelText('First name*')
      fireEvent.change(inputElement, {target: { value: 'May' }})
      await waitFor(() => {
        expect(inputElement.value).toBe('May')
      })
    });
    it('should be able to validate first name value', async () => {
      const inputElement = screen.getByLabelText('First name*')
      const errorElement = screen.getByTestId('fName')
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: 'a' }})
      })
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: '' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('First name is required')
      })
    });
  })

  describe('Last name input', () => {
    it('should render input last name element', () => {
      const inputElement = screen.getByLabelText('Last name*')
      expect(inputElement).toBeInTheDocument()
    });
    it('should be able to set last name value', async () => {
      const inputElement = screen.getByLabelText('Last name*')
      fireEvent.change(inputElement, {target: { value: 'Doe' }})
      await waitFor(() => {
        expect(inputElement.value).toBe('Doe')
      })
    });
    it('should be able to validate last name value', async () => {
      const inputElement = screen.getByLabelText('Last name*')
      const errorElement = screen.getByTestId('lName')
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: 'a' }})
      })
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: '' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Last name is required')
      })
    });
  })

  describe('Email input', () => {
    it('should render input email element', () => {
      const inputElement = screen.getByLabelText('Email*')
      expect(inputElement).toBeInTheDocument()
    });
    it('should be able to set email value', async () => {
      const inputElement = screen.getByLabelText('Email*')
      fireEvent.change(inputElement, {target: { value: 'mail@mail.com' }})
      await waitFor(() => {
        expect(inputElement.value).toBe('mail@mail.com')
      })
    });
    it('should be able to validate empty email value', async () => {
      const inputElement = screen.getByLabelText('Email*')
      const errorElement = screen.getByTestId('email')
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: 'a' }})
      })
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: '' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Email is required')
      })
    });
    it('should be able to check invalid email value', async () => {
      const inputElement = screen.getByLabelText('Email*')
      const errorElement = screen.getByTestId('email')
      await waitFor(() => {
        fireEvent.change(inputElement, {target: { value: 'mailmail.com' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Invalid email address')
      })
    });
  })
})
