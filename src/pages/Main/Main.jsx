import React, { useState } from 'react';
import classes from './Main.module.css';
import * as moment from 'moment';
// Import moment.js and russian locale from library
import 'moment/locale/ru';

// Import self-made components
import Month from '../../components/Month/Month.jsx';
import Weekdays from '../../components/WeekDays/WeekDays';
import CalendarGrid from '../../components/CalendarGrid/CalendarGrid.jsx';
import { useDispatch } from 'react-redux';

moment.locale('ru');
const weekdays = moment.weekdays(true); // change weekdays in europe-like version

export default function Main() {
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.format('MMMM'));
  const dispatch = useDispatch();

  // get range of days in this month
  const startDay = moment(today).startOf('month').startOf('week');
  const endDay = moment(today).endOf('month');

  return (
    <div className={classes.main}>
      <Month nameMonth={month} setToday={setToday} setMonth={setMonth} today={today} />

      <Weekdays week={weekdays} />
      <CalendarGrid startDay={startDay} endDay={endDay} today={today} />
    </div>
  );
}
