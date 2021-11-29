import React from 'react';
import classes from './Month.module.css';

// const Month = ({nameMonth, today, setToday, setMonth}) => {
const Month = ({ ...props }) => {
  console.log('Given props.name is ', props);
  const nextMonth = (e) => {
    e.stopPropagation();
    props.setToday(props.today.add(1, 'month'));
    props.setMonth(props.today.format('MMMM'));
  };

  const prevMonth = (e) => {
    e.stopPropagation();
    props.setToday(props.today.add(-1, 'month'));
    props.setMonth(props.today.format('MMMM'));
  };
  return (
    <div className={classes.month}>
      <button type="button" onClick={prevMonth}>
        <span className="material-icons" translate="no">
          navigate_before
        </span>
      </button>
      <span className={classes.monthName}>{props.nameMonth}</span>
      <button type="button" onClick={nextMonth}>
        <span className="material-icons" translate="no">
          navigate_next
        </span>
      </button>
    </div>
  );
};

export default Month;
