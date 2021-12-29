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
  return (
    <div className={classes.today} onClick={() => addShift(day)}>
      <div className={classes.label}>
        {day.day === window.moment().format('D MMM') ? (
          <span className={classes.todayLabel}>{day.day}</span>
        ) : (
          `${day.day}`
        )}
      </div>
      <ShiftList shifts={day.shifts} removeShift={removeShift} />
    </div>
  );
};

export default Day;
