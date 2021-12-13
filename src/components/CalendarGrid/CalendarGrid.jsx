import React, { useState } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';
import { v4 as uuidv4 } from 'uuid';
import { ADD_SHIFT } from '../../reducers/shiftReducer';

const CalendarGrid = function ({ startDay, endDay, today }) {
  const totalDays = [];
  const dispatch = useDispatch();
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');
  const location = useLocation();
  const employee = useSelector((state) => state.employeeReducer.employee);
  const shifts = useSelector((state) => state.shiftReducer.shifts);

  const calculateDays = () => {
    while (day.isSameOrBefore(endDay)) {
      while (moment(day).isBefore(startMonth)) {
        totalDays.push({
          id: uuidv4(),
          thisMonth: false,
          day: day.format('D MMM'),
          month: day.format('MM'),
          shifts: shifts.filter((shift) => {
            if (shift.month == moment(day).format('M')) {
              return shift.day == moment(day).format('D');
            }
          }),
        });
        day.add(1, 'day');
      }
      totalDays.push({
        id: uuidv4(),
        thisMonth: true,
        day: day.format('D MMM'),
        month: day.format('M'),
        fullday: moment(day),
        shifts: shifts.filter((shift) => {
          if (shift.month == moment(day).format('M')) {
            return shift.day == moment(day).format('D');
          }
        }),
      });
      day.add(1, 'day');
    }
  };

  calculateDays();

  const addShift = (day) => {
    console.log('employee is ', employee);
    console.log(day.fullday);
    const newShift = {
      id: uuidv4(),
      employee: employee,
      month: moment(day.fullday).format('M'),
      day: moment(day.fullday).format('D'),
    };

    if (location.pathname === '/moderation' && employee) {
      dispatch({
        type: ADD_SHIFT,
        shift: newShift,
      });
      console.log(shifts);
    }
  };

  return (
    <div className={classes.wrapper}>
      {totalDays.map((dayObj) => (
        <Day day={dayObj} addShift={addShift} key={dayObj.id} />
      ))}
    </div>
  );
};

export default CalendarGrid;
