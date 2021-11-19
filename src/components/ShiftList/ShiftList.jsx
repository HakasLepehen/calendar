import React from 'react';
import classes from './ShiftList.module.css';
import Shift from '../Shift/Shift';

function ShiftList(props) {
  console.log(props.shifts);
  return (
    <div className={classes.shifts}>
      {props.shifts.map((shift, index) => (
        <Shift shift={shift} key={index} />
      ))}
    </div>
  );
}
export default ShiftList;
