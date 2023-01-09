import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders Home link', () => {
  render(<Header />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
