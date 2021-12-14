import React from 'react';
import classes from './Day.module.css';
import ShiftList from '../ShiftList/ShiftList';

const Day = ({ day, addShift, removeShift }) => {
  // If the day is not from the current month
  if (!day.thisMonth) {
    return (
      <div className={classes.inactiveDay}>
        <div className={classes.label}>{day.day}</div>
        <ShiftList shifts={day.shifts} />
      </div>
    );
  }
  // displaying today in calendar
  if (day.day === window.moment().format('D MMM')) {
    return (
      <div className={classes.today} onClick={() => addShift(day)}>
        <div className={classes.label}>
          <span className={classes.todayLabel}>{day.day}</span>
        </div>
        <ShiftList shifts={day.shifts} removeShift={removeShift} />
      </div>
    );
  }

  return (
    <div className={classes.day} onClick={() => addShift(day)}>
      <div className={classes.label}>{day.day}</div>
      <ShiftList shifts={day.shifts} removeShift={removeShift} />
    </div>
  );
};

export default Day;
