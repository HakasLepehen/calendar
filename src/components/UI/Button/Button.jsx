import React from 'react';
import classes from './Buttton.module.css';

export default function Button({ classType, value, action }) {
  const clickHandler = () => {
    console.log('handled ', action);
    return action;
  };
  return (
    <button className={classes[classType]} onClick={action}>
      {value}
    </button>
  );
}
