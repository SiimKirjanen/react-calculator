import React from 'react';
import { OperationHistory } from '../../interfaces/operationHistory.interface';
import styles from './HistoryTable.module.css';

interface Props {
  operationHistory: OperationHistory[];
}

const HistoryTable = ({operationHistory}: Props) => {
  return <table className={`${styles.historyTable} table`}>
    <thead>
      <tr>
        <th>Operation</th>
        <th>Result</th>
      </tr>
    </thead>
    <tbody>
      {operationHistory.map((operation, i) => (
        <tr key={i}>
          <td>{operation.operation}</td>
          <td>{operation.result}</td>
      </tr>
      ))}
    </tbody>
  </table>
};

export default HistoryTable;
