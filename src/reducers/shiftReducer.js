const defaultState = {
  shifts: [],
  tempShifts: [],
  isChangedData: false,
};

export const ADD_SHIFT = 'ADD_SHIFT';
export const REMOVE_SHIFT = 'REMOVE_SHIFT';
export const COPY_SHIFTS = 'COPY_SHIFTS';
export const SYNCHRONIZE_ARRAYS = 'SYNCHRONIZE_ARRAYS';

export const shiftReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHIFT:
      return {
        ...state,
        tempShifts: [...state.tempShifts, action.shift],
        isChangedData: true,
      };
    case REMOVE_SHIFT:
      return {
        ...state,
        tempShifts: state.tempShifts.filter((el) => action.shift.id !== el.id),
        isChangedData: true,
      };
    case COPY_SHIFTS:
      return {
        ...state,
        shifts: [...action.shifts],
        tempShifts: (state.tempShifts = []),
        isChangedData: false,
      };
    case SYNCHRONIZE_ARRAYS:
      return {
        ...state,
        tempShifts: state.shifts,
        isChangedData: false,
      };
    default:
      return state;
  }
};
