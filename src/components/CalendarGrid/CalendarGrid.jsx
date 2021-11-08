import React from 'react';
import classes from "./CalendarGrid.module.css";


const CalendarGrid = ({startDay, endDay}) => {
    const totalDays = [];
    const day = startDay.clone();


    const calculateDays = () => {
        while (day.isSameOrBefore(endDay)) {
            totalDays.push(day.clone().format('DD MMM'));
            day.add(1, 'day');
        }
    }

    calculateDays();

    // console.log(startDay);
    // console.log(day);
    // console.log(totalDays);

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