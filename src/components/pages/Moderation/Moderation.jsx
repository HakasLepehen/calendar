import React, { useState } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';

export default function Moderation() {
  return (
    <div className={classes.wrapper}>
      <Main />
      <div className={classes.block}>
        <h3>Выберите необходимого сотрудника и добавьте ему смены, нажимая на нужный Вам день</h3>
        <Employees />
      </div>
    </div>
  );
}
