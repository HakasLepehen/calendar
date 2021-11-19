import React from 'react';
import moment from 'moment';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';

const CalendarGrid = function ({ startDay, endDay, today }) {
  const totalDays = [];
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');

  const calculateDays = () => {
    while (day.isSameOrBefore(endDay)) {
      while (moment(day).isBefore(startMonth)) {
        console.log('day are ', day);
        totalDays.push({
          thisMonth: false,

          day: day.clone().format('D MMM'),
          shifts: ['Белозеров Сергей', 'Поляк Степан'],
        });
        day.add(1, 'day');
      }
      totalDays.push({
        thisMonth: true,
        day: day.format('D MMM'),
        fullday: moment(day),
        shifts: ['Белозеров Сергей', 'Поляк Степан', 'Белозеров Сергей', 'Поляк Степан'],
      });
      day.add(1, 'day');
    }
    console.log(totalDays);
  };

  calculateDays();

  return (
    <div className={classes.wrapper}>
      {totalDays.map((dayObj, index) => (
        <Day day={dayObj} key={index} />
      ))}
    </div>
  );
};

export default CalendarGrid;
