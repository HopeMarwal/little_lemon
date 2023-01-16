import { render, screen } from '@testing-library/react'
import BookingHeader from '../BookingHeader';
import { BookingProvider } from '../../../context/BookingContext'

const MockComponent = ({step}) => {
  return (
    <BookingProvider>
      <BookingHeader step={step} />
    </BookingProvider>
  )
}

describe('BookingHeader', () => {
  it('should render the correct step', () => {
    render(<MockComponent step={3}/>)
    const headingElement = screen.getByText(/step 3 of 3/i);
    expect(headingElement).toBeInTheDocument()
  });
  it('should render the correct step in h3 tag', () => {
    render(<MockComponent step={3}/>)
    const headingElement = screen.getByText(/step 3 of 3/i);
    expect(headingElement).toContainHTML('h3')
  });
})
