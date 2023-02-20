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
    'btn btn-outline-secondary mx-2': true,
    'active': isActive
  });

  return <button type="button" className={btnClasses} onClick={buttonClick}>
    {children}
  </button>
};

export default Button;
