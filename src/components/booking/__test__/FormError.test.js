import { render, screen } from '@testing-library/react'
import FormErrorMessage from '../FormErrorMessage'

it('renders error text passed into error prop', () => {
  render(<FormErrorMessage error={'text error'}/>)
  const spanElement = screen.getByText(/text error/i);
  expect(spanElement).toBeInTheDocument()
});