import React from 'react';
import moment from 'moment';
import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';

import { v4 as uuidv4 } from 'uuid';

const CalendarGrid = function ({ startDay, endDay, today }) {
  const totalDays = [];
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');
  const location = useLocation();
  const shifts = useSelector((state) => {
    return location.pathname === '/moderation'
      ? state.shiftReducer.tempShifts
      : state.shiftReducer.shifts;
  });

  const addDay = (day, isThisMonth = true) => {
    totalDays.push({
      id: uuidv4(),
      thisMonth: isThisMonth,
      day: day.format('D MMM'),
      month: day.format('MM'),
      fullday: moment(day),
      shifts: shifts.filter((shift) => {
        if (shift.month == moment(day).format('M')) {
          return shift.day == moment(day).format('D');
        }
      }),
    });
    day.add(1, 'day');
  };

  const calculateDays = () => {
    while (day.isSameOrBefore(endDay)) {
      while (moment(day).isBefore(startMonth)) {
        addDay(day, false);
      }
      addDay(day);
    }
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
