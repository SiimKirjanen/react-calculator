import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Select from './Select';
import { OperationSelection } from '../../enums/operationSelection';

describe('<Select />', () => {
  const fakeOptions = [OperationSelection.sum, OperationSelection.divide];

  it('should mount', () => {
    render(<Select options={fakeOptions} activeOption={OperationSelection.divide} setActiveOperation={() => {}} />);

    expect(screen.getAllByRole('button')).toHaveLength(fakeOptions.length);
  });

  it('should call setActiveOperation prop when option clicked', () => {
    const fakeCallback = jest.fn();

    render(<Select options={fakeOptions} activeOption={OperationSelection.divide} setActiveOperation={fakeCallback} />);

    fireEvent.click(screen.getAllByRole('button')[1]);
    expect(fakeCallback).toHaveBeenCalledWith(OperationSelection.divide);
  });
});