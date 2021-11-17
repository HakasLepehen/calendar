import React from 'react';
import classes from "./CalendarGrid.module.css";
import moment from "moment";
import Day from "../Day/Day";


const CalendarGrid = ({startDay, endDay, today}) => {
    const totalDays = [];
    const day = startDay.clone();
    const startMonth = today.clone().startOf('month');
    console.log('endDay', endDay);
    console.log('startDay', startDay);
    console.log('startMonth', startMonth);

    const calculateDays = () => {
        while (day.isSameOrBefore(endDay)) {
            while (moment(day).isBefore(startMonth)) {
                console.log('day are ', day);
                totalDays.push(
                    {
                        thisMonth: false,
                        day: day.format('D MMM'),
                        events: ['1', '3']
                    }
                )
                day.add(1, 'day');
            }
            totalDays.push(
                {
                    thisMonth: true,
                    day: day.format('D MMM'),
                    shifts: ['Белозеров Сергей', 'Поляк Степан']
                }
            );
            day.add(1, 'day');
        }
        console.log(totalDays)
    }


    calculateDays();

    return (
        <div className={classes.wrapper}>
            {
                totalDays.map((dayObj, index) => <Day day={dayObj} key={index}/>)
            }
        </div>
    );
};

export default CalendarGrid;