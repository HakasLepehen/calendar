const defaultState = {
  shifts: [],
};

export const ADD_SHIFT = 'ADD_SHIFT';
export const REMOVE_SHIFT = 'REMOVE_SHIFT';

export const shiftReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHIFT:
      return {
        ...state,
        shifts: [...state.shifts, action.shift],
      };
    case REMOVE_SHIFT:
      return {
        ...state,
        shifts: state.shifts.filter((el) => action.shift.id !== el.id),
      };
    default:
      return state;
  }
};
