import './App.css';

// Import self-made components
import Month from "../Monitor/Month";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";

import * as moment from "moment";
import 'moment/locale/ru';
import {useState} from "react"; //Import moment.js and russian locale from library

moment.locale('ru');

let weekdays = moment.weekdays(true); //change weekdays in europe-like version


/**
 * Main function of my application
 */
function Index() {
    const [today, setToday] = useState(moment());
    const [month, setMonth] = useState(today.format('MMMM'));

    console.log('today is', today);
    console.log('month is', month);

    // get range of days in this month
    // const startDay = moment().startOf('month');
    // const endDay = moment().endOf('month');
    const startDay = today.startOf('month');
    const endDay = today.endOf('month');

    console.log('startDay is ', startDay);
    console.log('endDay is ', endDay);

    return (
        <div className="App">
            <Month
                nameMonth={month}
                setToday={setToday}
                setMonth={setMonth}
                today={today}
            />

            <Weekdays week={weekdays}/>
            <CalendarGrid
                startDay={startDay}
                endDay={endDay}
            />
        </div>
    );
}

export default Index;
