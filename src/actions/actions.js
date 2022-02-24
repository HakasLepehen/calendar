import {
  ADD_SHIFT,
  FETCH_EMPLOYEES,
  REMOVE_SHIFT,
  RESET_CHANGES,
  SAVE_TEMP_SHIFTS,
  SAVE_EMPLOYEES,
  SET_AUTH,
  SYNCHRONIZE_ARRAYS,
} from '../constants/constants';

export const synchronizeShifts = (shifts) => ({ type: SYNCHRONIZE_ARRAYS, shifts: shifts });
export const setAuth = (value) => ({ type: SET_AUTH, isAuth: value });
export const resetChanges = () => ({ type: RESET_CHANGES });
export const saveTempShifts = () => ({ type: SAVE_TEMP_SHIFTS });
export const addShiftToDay = (shift) => ({ type: ADD_SHIFT, shift: shift });
export const removeShiftFromDay = (shift) => ({ type: REMOVE_SHIFT, shift: shift });
export const fetchEmployees = () => ({ type: FETCH_EMPLOYEES });
export const saveEmployees = (users) => ({ type: SAVE_EMPLOYEES, users: users });
