import React from 'react';

import styles from './Input.module.css';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  id: string;
}

const Input = ({handleChange, id}: Props) => (
  <input type="number" aria-label="calculator-input" className={styles.input} onChange={(e) =>handleChange(e, id) } />
);

export default Input;
