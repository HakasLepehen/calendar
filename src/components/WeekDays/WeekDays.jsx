import React from 'react';
import WeekDay from "../WeekDay/WeekDay";

const WeekDays = ({week}) => {
    const data = [];
    console.log('Props from ', data);
    console.log('Props from ', {week});
    // <WeekDay day={week} />
    return (
        <div>
            {week.map(day => <WeekDay day={day}/>)}
        </div>
    );
};

export default WeekDays;