import React from 'react';
import classes from './WeekDay.module.css';

const WeekDay = ({ day }) => {
  return <div className={classes.day}>{day}</div>;
};

export default WeekDay;
