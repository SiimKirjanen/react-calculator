import React from 'react';
import classNames from 'classnames';
import { OperationSelection } from '../../enums/operationSelection';
import styles from './Button.module.scss';

interface Props {
  children: OperationSelection | string;
  
  buttonClick: () => void;
  isActive?: boolean;
}

const Button = ({children, buttonClick, isActive = false}: Props) => {
  const btnClasses = classNames({
    'active': isActive
  });

  return <button className={btnClasses} onClick={buttonClick}>
    {children}
  </button>
};

export default Button;
