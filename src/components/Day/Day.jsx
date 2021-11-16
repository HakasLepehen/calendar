import React from 'react';
import classes from "./Day.module.css";
import Shift from "../Shift/Shift";

const Day = ({day}) => {
    if (!day.thisMonth) {
        return (<div className={classes.inactiveDay}>
            <div className={classes.label}>
                {day.day}
            </div>
        </div>)
    }
    return (
        <div className={classes.day}>
            <div className={classes.label}>{day.day}</div>
            {
                !day.shifts.length
                    ? (<div>Сегодня смен нет...</div>)
                    : day.shifts.map(
                        (shift, index) => <Shift shift={shift} key={index}/>
                    )
            }
        </div>
    );
};

export default Day;