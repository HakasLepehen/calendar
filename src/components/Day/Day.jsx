import React from 'react';
import classes from './Day.module.css';
import ShiftList from '../ShiftList/ShiftList';

const Day = ({ day }) => {
  if (!day.thisMonth) {
    console.log({ ...day });
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
      <div className={classes.today}>
        <div className={classes.label}>
          <span className={classes.todayLabel}>{day.day}</span>
        </div>
        <ShiftList shifts={day.shifts} />
      </div>
    );
  }

  return (
    <div className={classes.day} onClick={() => console.log(day.fullday)}>
      <div className={classes.label}>{day.day}</div>
      <ShiftList shifts={day.shifts} />
    </div>
  );
};

export default Day;
