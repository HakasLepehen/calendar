import React, { useState } from 'react';
import classes from './Moderation.module.css';
import Main from '../Main/Main.jsx';
import Employees from '../../Employees/Employees';

export default function Moderation() {
  const [selectedEmployee, setSelectedEmployee] = useState();

  return (
    <div className={classes.wrapper}>
      <Main selectedEmployee={selectedEmployee} />
      <div className={classes.block}>
        <h3>Выберите необходимого сотрудника и добавьте ему смены, нажимая на нужный Вам день</h3>
        <Employees setSelectedEmployee={setSelectedEmployee} />
      </div>
    </div>
  );
}
