import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface Props {
  children: string;
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
