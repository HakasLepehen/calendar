import React, { useState } from 'react';
import * as moment from 'moment';

// Import self-made components
import Month from '../Month/Month';
import CalendarGrid from '../CalendarGrid/CalendarGrid';
import Weekdays from '../WeekDays/WeekDays';

const weekdays = moment.weekdays(true); // change weekdays in europe-like version

export default function Main() {
  const [today, setToday] = useState(moment());
  const [month, setMonth] = useState(today.format('MMMM'));

  // get range of days in this month
  const startDay = moment(today).startOf('month').startOf('week');
  const endDay = moment(today).endOf('month');

  return (
    <div className="Main">
      <Month nameMonth={month} setToday={setToday} setMonth={setMonth} today={today} />

      <Weekdays week={weekdays} />
      <CalendarGrid startDay={startDay} endDay={endDay} today={today} />
    </div>
  );
}
