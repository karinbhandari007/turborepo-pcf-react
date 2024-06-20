import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';

test('renders Button component correctly', () => {
  const { asFragment } = render(
    <Button
      primary={true}
      size="large"
      backgroundColor="blue"
      label="Click Me"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders secondary Button component correctly', () => {
  const { asFragment } = render(
    <Button
      primary={false}
      size="medium"
      backgroundColor="gray"
      label="Secondary Action"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders small Button component correctly', () => {
  const { asFragment } = render(
    <Button
      primary={false}
      size="small"
      backgroundColor="green"
      label="Small Button"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
