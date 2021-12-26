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

defaultState.tempShifts = defaultState.shifts.slice();

export const ADD_SHIFT = 'ADD_SHIFT';
export const REMOVE_SHIFT = 'REMOVE_SHIFT';

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
    default:
      return state;
  }
};
