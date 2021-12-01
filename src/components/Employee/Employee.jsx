import React from 'react';
import classes from './Employee.module.css';

export default function Employee({ onChangeValue }) {
  return (
    <label className={classes.employee} onChange={onChangeValue}>
      <input type="radio" value="asdasdasdasd" name="1" />
      <span>asdasdasdasd</span>
    </label>
  );
}
