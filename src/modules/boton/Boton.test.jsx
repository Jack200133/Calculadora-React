import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Boton from './Boton'

it('renders the text into button', () => {
  render(<Boton numero="5" backcolor="#171717" colori="#fafafa" click={{}} />)
  const element = screen.getByText('5')
  expect(element).toBeInTheDocument()
})