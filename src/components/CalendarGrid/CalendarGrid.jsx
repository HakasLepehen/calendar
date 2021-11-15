import React from 'react';
import classes from "./CalendarGrid.module.css";


const CalendarGrid = ({startDay, endDay, today}) => {
    const totalDays = [];
    const day = startDay.clone();
    console.log('endDay', endDay);
    console.log('startDay', startDay);

    const calculateDays = () => {
        for (let i = 0; i < startDay.weekday(); i++) {
            totalDays.push('')
        }
        while (day.isSameOrBefore(endDay)) {
            totalDays.push(day.format('DD MMM'));
            day.add(1, 'day');
        }
        console.log(totalDays);
    }


    calculateDays();

    return (
        <div className={classes.wrapper}>
            {totalDays.map((day, index) => {
                if (!day) {
                    return (<div className={classes.inactiveDay} key={index}/>)
                }
                return <div className={classes.day} key={index}>
                    <div className={classes.label}>{day}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                    <div className={classes.event}>{index}</div>
                </div>
            })}
        </div>
    );
};

export default CalendarGrid;