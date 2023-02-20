import React from 'react';
import { OperationSelection } from '../../enums/operationSelection';
import Button from '../Button/Button';
import styles from './Select.module.scss';

interface Props {
  options: OperationSelection[];
  activeOperation: OperationSelection;
  setActiveOperation: (option: OperationSelection) => void;
}

const Select = ({options, activeOperation, setActiveOperation}: Props) => (
  <div>
    {options.map((option, i) => {
      const isActive = option === activeOperation;

      return <Button key={i} buttonClick={() => setActiveOperation(option)} isActive={isActive}>{option}</Button>
    })}
  </div>
);

export default Select;
