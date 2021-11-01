import './App.css';
import moment from "moment";
import Header from "../Header/Header";
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";

moment.updateLocale("en", {week: {dow: 1}});

function Index() {
  const month = [];
  const startDay = moment().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const day = startDay.clone();

  while (day.isSameOrBefore(endDay)) {
    month.push(day.clone());
    day.add(1, 'day');
  }

  console.log(month);

  return (
    <div className="App">
      <Header />
      <Monitor />
      <CalendarGrid />
    </div>
  );
}

export default Index;
