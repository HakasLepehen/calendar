import React from 'react';
import classes from './Buttton.module.css';

export default function Button({ classType, value }) {
  return <button className={classes[classType]}>{value}</button>;
}
