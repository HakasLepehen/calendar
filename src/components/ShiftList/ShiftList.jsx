import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

import classes from './ShiftList.module.css';
import Shift from '../Shift/Shift';
import { ADD_SHIFT, REMOVE_SHIFT } from '../../constants/constants.js';
import { Context } from '../../context/Context';
import { addShiftToDay, removeShiftFromDay } from '../../actions/actions.js';

function ShiftList({ day, shifts }) {
  const location = useLocation();
  const dispatch = useDispatch();
  const { selectedEmployee } = useContext(Context);

  const addShift = () => {
    const employeeIdArray = shifts.map((shift) => shift.employee.id);

    const newShift = {
      id: uuidv4(),
      employee: selectedEmployee,
      month: moment(day).format('M'),
      day: moment(day).format('D'),
    };

    if (location.pathname === '/moderation') {
      if (selectedEmployee) {
        employeeIdArray.includes(selectedEmployee.id)
          ? alert('Невозможно добавить две смены одному специалисту в один день!')
          : dispatch(addShiftToDay(newShift));
        return;
      }
      alert('Выберите сотрудника для добавления в график!');
    }
  };

  const removeShift = (shift) => {
    return (event) => {
      event.stopPropagation();
      dispatch(removeShiftFromDay(shift));
    };
  };

  return (
    <div className={classes.shifts} onClick={addShift}>
      {shifts.map((shift) => (
        <Shift shift={shift} key={shift.id} removeShift={removeShift} />
      ))}
    </div>
  );
}
export default ShiftList;
