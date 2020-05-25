import React from 'react'
import { render } from '@testing-library/react'
import App from './index'

test('Renders App component', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
