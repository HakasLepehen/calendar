import React from 'react';
import WeekDay from "../WeekDay/WeekDay";
import classes from "./Weekdays.module.css";

const WeekDays = ({week}) => {
    return (
        <div className={classes.weekDays}>
            {week.map((day, index) => <WeekDay day={day} key={index}/>)}
        </div>
    );
};

export default WeekDays;