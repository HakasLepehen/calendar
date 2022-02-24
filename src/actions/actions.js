import {
  ADD_SHIFT,
  FETCH_USERS,
  REMOVE_SHIFT,
  RESET_CHANGES,
  SAVE_TEMP_SHIFTS,
  SAVE_USERS,
  SET_AUTH,
  SYNCHRONIZE_ARRAYS,
} from '../constants/constants';

export const synchronizeShifts = (shifts) => ({ type: SYNCHRONIZE_ARRAYS, shifts: shifts });
export const setAuth = (value) => ({ type: SET_AUTH, isAuth: value });
export const resetChanges = () => ({ type: RESET_CHANGES });
export const saveTempShifts = () => ({ type: SAVE_TEMP_SHIFTS });
export const addShiftToDay = (shift) => ({ type: ADD_SHIFT, shift: shift });
export const removeShiftFromDay = (shift) => ({ type: REMOVE_SHIFT, shift: shift });
export const fetchUsers = () => ({ type: FETCH_USERS });
export const saveUsers = (users) => ({ type: SAVE_USERS, users: users });
