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
    // const month = today.format('MMMM');

    // get range of days in this month
    const startDay = moment().startOf('month');
    const endDay = moment().endOf('month');

    const increment = (e) => {
        e.stopPropagation();
        setToday(today.add(1, 'month'));
        setMonth(today.format('MMMM'));
        console.log('new today is ',today);
        console.log('new month', month);
    }

    return (
        <div className="App">
            <button onClick={increment}>Вперед</button>
            <Month name={month}/>
            <Weekdays week={weekdays}/>
            <CalendarGrid startDay={startDay} endDay={endDay}/>
        </div>
    );
}

export default Index;
