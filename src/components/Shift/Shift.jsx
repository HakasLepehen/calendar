import React from 'react';
import classes from './Shift.module.css';

const Shift = (props) => (
  <div className={classes.shift}>
    <div className={classes.label}>{props.shift}</div>
    <span className={`material-icons ${classes.delete}`}>person_remove</span>
  </div>
);

export default Shift;
