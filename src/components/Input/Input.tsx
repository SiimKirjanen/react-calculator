import React from 'react';
import styles from './Input.module.scss';

interface Props {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
  id: string;
}

const Input = ({handleChange, id}: Props) => (
  <input type="number" onChange={(e) =>handleChange(e, id) } />
);

export default Input;
