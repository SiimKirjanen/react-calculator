import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './Select.module.scss';

interface Props {
  options: string[];
  activeOperation: string;
  setActiveOperation: (option: string) => void;
}

const Select = ({options, setActiveOperation}: Props) => (
  <div>
    {options.map((option, i) => {
      return <Button key={i} buttonClick={() => setActiveOperation(option)}>{option}</Button>
    })}
  </div>
);

export default Select;
