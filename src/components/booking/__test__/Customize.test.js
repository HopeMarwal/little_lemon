import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Customize from '../Customize'
import { BookingProvider } from '../../../context/BookingContext'

const MockComponent = () => {
  return (
    <BookingProvider>
      <Customize />
    </BookingProvider>
  )
}

describe('Customize', () => {
  beforeEach(() => {
    render(<MockComponent />);
  });
  describe('Date input', () => {
    it('should render input date element', () => {
      const inputDataElement = screen.getByLabelText('Date*')
      expect(inputDataElement).toBeInTheDocument()
    });
    it('should be able to set date value', async () => {
      const inputDataElement = screen.getByLabelText('Date*')
      fireEvent.change(inputDataElement, {target: { value: '2023-10-10' }})
      await waitFor(() => {
        expect(inputDataElement.value).toBe('2023-10-10')
      })
    });
    it('should be able to validate date value', async () => {
      const inputDataElement = screen.getByLabelText('Date*')
      const errorElement = screen.getByTestId('date')
      await waitFor(() => {
        fireEvent.change(inputDataElement, {target: { value: '2022-10-10' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('This date is not avaible')
      })
    });
    it('should be able to validate empty date value', async () => {
      const inputDataElement = screen.getByLabelText('Date*')
      const errorElement = screen.getByTestId('date')
      await waitFor(() => {
        fireEvent.change(inputDataElement, {target: { value: '' }})
      })
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Choose date')
      })
    });
  })
  describe('Time select', () => {
    it('should render select time element', () => {
      const selectTimeElement = screen.getByLabelText('Time*')
      expect(selectTimeElement).toBeInTheDocument()
    });
    it('should be able to set time value', async () => {
      const selectTimeElement = screen.getByLabelText('Time*')
      fireEvent.change(selectTimeElement, {target: { value: '20:30' }})
      await waitFor(() => {
        expect(selectTimeElement.value).toBe('20:30')
      })
    });
  })
  describe('Number of diners input', () => {
    it('should render select numOfDiners element', () => {
      const inputNumElement = screen.getByLabelText('Number of diners*')
      expect(inputNumElement).toBeInTheDocument()
    });
    it('should be able to set number of value', async () => {
      const inputNumElement = screen.getByLabelText('Number of diners*')
      fireEvent.change(inputNumElement, {target: { value: '4' }})
      await waitFor(() => {
        expect(inputNumElement.value).toBe('4')
      })
    });
    it('should be able to validate negative number of diners value', async () => {
      const inputNumElement = screen.getByLabelText('Number of diners*')
      const errorElement = screen.getByTestId('numberOfDiners')
      fireEvent.change(inputNumElement, {target: { value: '-4' }})
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Error number')
      })
    });
    it('should be able to validate maximum number of diners value', async () => {
      const inputNumElement = screen.getByLabelText('Number of diners*')
      const errorElement = screen.getByTestId('numberOfDiners')
      fireEvent.change(inputNumElement, {target: { value: '18' }})
      await waitFor(() => {
        expect(errorElement.textContent).toBe('Maximum 16 people')
      })
    });
  })
  describe('Outside table input', () => {
    it('should render check input element', () => {
      const inputCheckElement = screen.getByLabelText('Outside table')
      expect(inputCheckElement).toBeInTheDocument()
    });
    it('should be able to set check value', async () => {
      const inputCheckElement = screen.getByLabelText('Outside table')
      fireEvent.change(inputCheckElement)
      await waitFor(() => {
        expect(inputCheckElement.checked).not.toBe(inputCheckElement)
      })
    });
  })
  describe('Fetch time', () => {
    it('should be not empty select element when change date', async () => {
      const inputDataElement = screen.getByLabelText('Date*')
      await waitFor(() => {
        fireEvent.change(inputDataElement, {target: { value: '2024-10-10' }})
      })
      const selectElement = screen.getByLabelText('Time*')
      await waitFor(() => {
        expect(selectElement.value).toBeTruthy()
      })
    })
  })
})
