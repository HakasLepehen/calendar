import {
  RESET_CHANGES,
  SAVE_TEMP_SHIFTS,
  SET_AUTH,
  SYNCHRONIZE_ARRAYS,
} from '../constants/constants';

export const synchronizeShifts = (shifts) => ({ type: SYNCHRONIZE_ARRAYS, shifts: shifts });
export const setAuth = (value) => ({ type: SET_AUTH, isAuth: value });
export const resetChanges = () => ({ type: RESET_CHANGES });
export const saveTempShifts = () => ({ type: SAVE_TEMP_SHIFTS });
