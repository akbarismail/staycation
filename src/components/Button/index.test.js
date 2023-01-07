/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import Button from './index';
import { createMemoryHistory } from 'history';

test('Should not allowed click button if isDisabled is present', () => {
  const { container } = render(<Button isDisabled />);
  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('Should render loading', () => {
  const { container, getByText } = render(<Button isLoading />);
  expect(getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('div span')).toBeInTheDocument();
});

test('Should render <a> tag', () => {
  const { container } = render(<Button type={'link'} isExternal />);
  expect(container.querySelector('a')).toBeInTheDocument();
});

test('Should render <Link> component', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router location={history.location} navigator={history}>
      <Button href={'/'} type={'link'} />
    </Router>
  );
  expect(container.querySelector('a')).toBeInTheDocument();
});
