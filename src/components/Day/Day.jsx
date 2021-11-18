import React from 'react';
import classes from "./Day.module.css";
import Shift from "../Shift/Shift";

const Day = ({day}) => {
    if (!day.thisMonth) {
        console.log({...day});
        return (
            <div className={classes.inactiveDay}>
                <div className={classes.label}>{day.day}</div>
            </div>
        )
    }
    // displaying today in calendar
    if (day.day === window.moment().format('D MMM')) {
        return (
            <div className={classes.today}>
                <div className={classes.label}>
                    <span className={classes.todayLabel}>{day.day}</span>
                </div>
                {
                    (!day.shifts.length)
                        ? (<div>Сегодня смен нет...</div>)
                        : day.shifts.map(
                            (shift, index) => <Shift shift={shift} key={index}/>
                        )
                }
            </div>
        )
    }

    return (
        <div
            className={classes.day}
            onClick={(e) =>console.log(day.fullday)}
        >
            <div className={classes.label}>{day.day}</div>
            {
                (!day.shifts.length)
                    ? (<div>Сегодня смен нет...</div>)
                    : day.shifts.map(
                        (shift, index) => <Shift shift={shift} key={index}/>
                    )
            }
        </div>
    );
};

export default Day;