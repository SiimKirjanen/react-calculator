import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HistoryTable from './HistoryTable';
import { OperationHistory } from '../../interfaces/operationHistory.interface';

describe('<HistoryTable />', () => {
  it('should mount the history table', () => {
    render(<HistoryTable operationHistory={[]} />);
    
    screen.getByText('Operation');
    screen.getByText('Result');
  });

  it('should show history', () => {
    let fakeHistory: OperationHistory[] = [
      {
        result: 2,
        operation: '1+1'
      },
      {
        result: 5,
        operation: '10/2'
      }
    ];

    render(<HistoryTable operationHistory={fakeHistory} />);
    
    screen.getByText('1+1');
    screen.getByText('2');

    screen.getByText('10/2');
    screen.getByText('5');
  });
  
});