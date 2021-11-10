import './App.css';
// import moment from "moment";
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";
import moment from "moment/min/moment-with-locales.min";
moment.locale('ru');

let local = moment();

console.log(local.format('DD/MMM/YYYY'))




function Index() {
    const startDay = moment().startOf('month');
    const endDay = moment().endOf('month');

    return (
        <div className="App">
            <Monitor/>
            <Weekdays/>
            <CalendarGrid startDay={startDay} endDay={endDay}/>
        </div>
    );
}

export default Index;
