import React, { useContext } from 'react';
import moment from 'moment';
import { useLocation } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import classes from './CalendarGrid.module.css';
import Day from '../Day/Day';
import { checkDay } from '../../utils/checkers';

import { v4 as uuidv4 } from 'uuid';
import { ADD_SHIFT, REMOVE_SHIFT } from '../../reducers/shiftReducer';
import { Context } from '../../context/Context';

const CalendarGrid = function ({ startDay, endDay, today }) {
  const totalDays = [];
  const dispatch = useDispatch();
  const day = startDay.clone();
  const startMonth = today.clone().startOf('month');
  const location = useLocation();
  const { selectedEmployee } = useContext(Context);
  const shifts = useSelector((state) => state.shiftReducer.shifts);

  console.log('selectedEmployee', selectedEmployee);

  const calculateDays = () => {
    while (day.isSameOrBefore(endDay)) {
      while (moment(day).isBefore(startMonth)) {
        totalDays.push({
          id: uuidv4(),
          thisMonth: false,
          day: day.format('D MMM'),
          month: day.format('MM'),
          shifts: shifts.filter((shift) => {
            if (shift.month == moment(day).format('M')) {
              return shift.day == moment(day).format('D');
            }
          }),
        });
        day.add(1, 'day');
      }
      totalDays.push({
        id: uuidv4(),
        thisMonth: true,
        day: day.format('D MMM'),
        month: day.format('M'),
        fullday: moment(day),
        shifts: shifts.filter((shift) => {
          if (shift.month == moment(day).format('M')) {
            return shift.day == moment(day).format('D');
          }
        }),
      });
      day.add(1, 'day');
    }
  };

  calculateDays();

  const addShift = (day) => {
    const employeesInShiftList = day.shifts.map((shift) => shift.employee);

    const newShift = {
      id: uuidv4(),
      employee: selectedEmployee,
      month: moment(day.fullday).format('M'),
      day: moment(day.fullday).format('D'),
    };

    if (location.pathname === '/moderation') {
      if (selectedEmployee) {
        if (checkDay(day.fullday))
          employeesInShiftList.includes(selectedEmployee)
            ? alert('Невозможно добавить две смены одному специалисту в один день!')
            : dispatch({ type: ADD_SHIFT, shift: newShift });

        return;
      }
      alert('Выберите сотрудника для добавления в график!');
    }
  };

  const removeShift = (shift) => {
    dispatch({
      type: REMOVE_SHIFT,
      shift: shift,
    });
  };

  return (
    <div className={classes.wrapper}>
      {totalDays.map((dayObj) => (
        <Day day={dayObj} addShift={addShift} key={dayObj.id} removeShift={removeShift} />
      ))}
    </div>
  );
};

export default CalendarGrid;
