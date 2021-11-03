import './App.css';
import moment from "moment";
import Monitor from "../Monitor/Monitor";
import CalendarGrid from "../CalendarGrid/CalendarGrid";
import Weekdays from "../WeekDays/WeekDays";

// moment.locale('ru', {
//     week: {dow: 1},
//     months: {
//         format: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь'.split('_')
//     },
//     monthsShort: {
//         format: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
//         standalone: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_')
//     },
//     weekdays: {
//         format: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split('_')
//     },
//     weekdaysShort: {
//         format: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split('_'),
//         standalone: 'Воскр_Пн_Вт_Ср_Чт_Пт_Сб'.split('_')
//     },
// })

// moment.updateLocale('ru', {
//     week: {dow: 1},
//     months: {
//         format: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь'
//     },
//     monthsShort: {
//         format: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
//         standalone: 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_')
//     },
//     weekdays: {
//       format: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split('_')
//     },
//     weekdaysShort: {
//         format: "Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота".split('_'),
//         standalone: 'Воскр_Пн_Вт_Ср_Чт_Пт_Сб'.split('_')
//     },
//     longDateFormat : {
//         LT : 'HH:mm',
//         LTS : 'HH:mm:ss',
//         L : 'DD/MM/YYYY',
//         LL : 'D MMMM YYYY',
//         LLL : 'D MMMM YYYY HH:mm',
//         LLLL : 'dddd D MMMM YYYY HH:mm'
//     },
// });
let defaultWeekdays = Array.apply(null, Array(7)).map(function (_, i) {
    return moment(i, 'e').startOf('week').isoWeekday(i + 1).format('dddd');
});
moment.locale('ru', {
    monthsShort : 'Янв_Фев_Март_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_')
})

console.log('Меняем язык', moment());

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
