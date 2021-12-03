import React, { useState } from 'react';
import moment from 'moment';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';
import { v4 as uuidv4 } from 'uuid';

const CalendarGrid = function ({ startDay, endDay, today, selectedEmployee }) {
  const totalDays = [];
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');

  console.log('переданный сотрудник', selectedEmployee);

  let [shifts, setShifts] = useState([
    {
      id: uuidv4(),
      employee: 'Поляк Степан',
      month: 11,
      day: '29',
    },
    {
      id: uuidv4(),
      employee: 'Белозеров Сергей',
      month: 11,
      day: '25',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 11,
      day: '1',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 11,
      day: '24',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 12,
      day: '1',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 12,
      day: '1',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 12,
      day: '1',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 12,
      day: '1',
    },
    {
      id: uuidv4(),
      employee: 'Гуров Павел',
      month: 12,
      day: '1',
    },
  ]);

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

  return (
    <div className={classes.wrapper}>
      {totalDays.map((dayObj) => (
        <Day day={dayObj} key={dayObj.id} />
      ))}
    </div>
  );
};

export default CalendarGrid;
