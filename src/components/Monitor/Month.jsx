import React from 'react';
import classes from "./Month.module.css";

const Month = ({name}) => {
    console.log('Given props.name is ', name)
    return (
        <div className={classes.month}>
            {name}
        </div>
    );
};

export default Month;