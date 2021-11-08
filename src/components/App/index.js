import './App.css';
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";
import moment from "moment/min/moment-with-locales.min.js";
moment.locale('ru');

let weekdays = moment.weekdays(true);

console.log('weekdays ', moment.weekdays(true));

function Index() {
    const startDay = moment().startOf('month');
    const endDay = moment().endOf('month');

    return (
        <div className="App">
            <Monitor/>
            <Weekdays week={weekdays} />
            <CalendarGrid startDay={startDay} endDay={endDay}/>
        </div>
    );
}

export default Index;
