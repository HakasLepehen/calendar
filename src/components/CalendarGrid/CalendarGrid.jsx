import React from 'react';
import classes from "./CalendarGrid.module.css";


const CalendarGrid = ({startDay, endDay,  today}) => {
    const totalDays = [];
    const day = startDay.clone();
    console.log('endDay', endDay);
    console.log('startDay', startDay.day());

    const calculateDays = () => {
        while (day.isSameOrBefore(endDay)) {
            totalDays.push(day.format('D MMM'));
            day.add(1, 'day');
        }
    }

    calculateDays();

    return (
        <div className={classes.wrapper}>
            {totalDays.map((day, index) => (
                <div className={classes.day} key={index}>
                    <div className={classes.label}>{day}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                </div>
            ))}
        </div>
    );
};

export default CalendarGrid;