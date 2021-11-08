import './App.css';

// Import self-made components
import Month from "../Monitor/Month";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";

import * as moment from "moment";
import 'moment/locale/ru'; //Import moment.js and russian locale from library

moment.locale('ru');

let weekdays = moment.weekdays(true); //change weekdays in europe-like version
let month = moment().format('MMMM');

/**
 * Main function of my application
 */
function Index() {

    // get range of days in this month
    const startDay = moment().startOf('month');
    const endDay = moment().endOf('month');

    return (
        <div className="App">
            <Month name={month}/>
            <Weekdays week={weekdays}/>
            <CalendarGrid startDay={startDay} endDay={endDay}/>
        </div>
    );
}

export default Index;
