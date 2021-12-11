import React, { useState } from 'react';
import classes from './Main.module.css';
import * as moment from 'moment';
// Import moment.js and russian locale from library
import 'moment/locale/ru';

// Import self-made components
import Month from '../../Month/Month';
import CalendarGrid from '../../CalendarGrid/CalendarGrid';
import Weekdays from '../../WeekDays/WeekDays';

moment.locale('ru');
const weekdays = moment.weekdays(true); // change weekdays in europe-like version

export default function Main(selectedEmployee) {
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.format('MMMM'));

  // get range of days in this month
  const startDay = moment(today).startOf('month').startOf('week');
  const endDay = moment(today).endOf('month');

  console.log('Переданный в MAIN сотрудник', selectedEmployee);
  return (
    <div className={classes.main}>
      <Month nameMonth={month} setToday={setToday} setMonth={setMonth} today={today} />

      <Weekdays week={weekdays} />
      <CalendarGrid
        startDay={startDay}
        endDay={endDay}
        today={today}
        selectedEmployee={selectedEmployee}
      />
    </div>
  );
}
