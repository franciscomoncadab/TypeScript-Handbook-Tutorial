import React from 'react';
import { render, screen } from '@testing-library/react';
import  Greeting from './containers/Greeting';

test('renders learn react link', () => {
  render(<Greeting />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
