import React from 'react';
import classes from './ShiftList.module.css';
import Shift from '../Shift/Shift';

function ShiftList({ shifts, removeShift }) {
  return (
    <div className={classes.shifts}>
      {shifts.map((shift) => (
        <Shift shift={shift} key={shift.id} removeShift={removeShift} />
      ))}
    </div>
  );
}
export default ShiftList;
