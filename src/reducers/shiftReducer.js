const defaultState = {
  shifts: [
    {
      id: 'ae3c2d5a-4012-4a72-8cba-fa9c07871049',
      employee: {
        id: 'c121ee2d-e630-4910-aabf-7a824337518e',
        name: 'Гуров Павел',
      },
      month: '12',
      day: '29',
    },
  ],
  tempShifts: [],
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
      };
    case REMOVE_SHIFT:
      return {
        ...state,
        tempShifts: state.tempShifts.filter((el) => action.shift.id !== el.id),
      };
    case COPY_SHIFTS:
      return {
        ...state,
        shifts: [...action.shifts],
      };
    case SYNCHRONIZE_ARRAYS:
      return {
        ...state,
        tempShifts: state.shifts,
      };
    default:
      return state;
  }
};
