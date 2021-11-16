import React from 'react';
import classes from "./Shift.module.css";

const Shift = (props) => {
    return (
        <div className={classes.shift}>
            {props.shift}
        </div>
    );
};

export default Shift;