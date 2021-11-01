import React from 'react';
import classes from "./CalendarGrid.module.css";

const CalendarGrid = () => {
    const totalDays = 35;
    const daysArray = [...Array(totalDays)];
    return (
        <div className={classes.wrapper}>
            {daysArray.map((_, index) => (
                <div className={classes.day} key={index}>
                    <div className={classes.label}>{index}</div>
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