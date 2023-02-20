import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Input from './Input';

describe('<Input />', () => {
  it('should mount', () => {
    render(<Input handleChange={() => {}} id="test-id" />);
    screen.getByLabelText('calculator-input');
  });

  it('should call handleChange prop when input change', () => {
    const fakeHandle = jest.fn();

    render(<Input handleChange={fakeHandle} id="test-id" />);

    fireEvent.change(screen.getByLabelText('calculator-input'), {target: {value: 5}});

    expect(fakeHandle).toHaveBeenCalledTimes(1);
  });
});