import './App.css';
import Month from "../Monitor/Month";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";
import moment from "moment/min/moment-with-locales.min.js";
moment.locale('ru');

let weekdays = moment.weekdays(true);
let month = moment().format('MMMM');

function Index() {
    const startDay = moment().startOf('month');
    const endDay = moment().endOf('month');

    return (
        <div className="App">
            <Month name={month}/>
            <Weekdays week={weekdays} />
            <CalendarGrid startDay={startDay} endDay={endDay}/>
        </div>
    );
}

export default Index;
