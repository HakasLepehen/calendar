import React from 'react';
import classes from './ShiftList.module.css';
import Shift from '../Shift/Shift';

function ShiftList({ shifts }) {
  const removeShift = (e) => alert('I have been removed!');
  return (
    <div className={classes.shifts}>
      {shifts.map((shift, index) => (
        <Shift shift={shift} key={shift.id} removeShift={removeShift} />
      ))}
    </div>
  );
}
export default ShiftList;
