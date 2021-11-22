import React from 'react';
import moment from 'moment';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';
import { v4 as uuidv4 } from 'uuid';

const CalendarGrid = function ({ startDay, endDay, today }) {
  const totalDays = [];
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');

  const calculateDays = () => {
    while (day.isSameOrBefore(endDay)) {
      while (moment(day).isBefore(startMonth)) {
        console.log('day are ', day);
        totalDays.push({
          id: uuidv4(),
          thisMonth: false,
          day: day.format('D MMM'),
          month: day.format('MM'),
          shifts: ['Белозеров Сергей', 'Поляк Степан'],
        });
        day.add(1, 'day');
      }
      totalDays.push({
        id: uuidv4(),
        thisMonth: true,
        day: day.format('D MMM'),
        month: day.format('M'),
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
      {totalDays.map((dayObj) => (
        <Day day={dayObj} key={dayObj.id} />
      ))}
    </div>
  );
};

export default CalendarGrid;
