import React, { useState } from 'react';
import './App.css';
import * as moment from 'moment';

// Import self-made components
import Month from '../Month/Month';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import Weekdays from '../WeekDays/WeekDays';
// Import moment.js and russian locale from library
import 'moment/locale/ru';

moment.locale('ru');
window.moment = moment;

const weekdays = moment.weekdays(true); // change weekdays in europe-like version

/**
 * Main function of my application
 */
const Index = () => {
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.format('MMMM'));

  console.log('today is', today);
  console.log('month is ', month);

  // get range of days in this month
  const startDay = moment(today).startOf('month').startOf('week');
  const endDay = moment(today).endOf('month');

  return (
    <div className="App">
      <Month nameMonth={month} setToday={setToday} setMonth={setMonth} today={today} />

      <Weekdays week={weekdays} />
      <CalendarGrid startDay={startDay} endDay={endDay} today={today} />
    </div>
  );
};

export default Index;
