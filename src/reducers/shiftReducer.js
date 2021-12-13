const defaultState = {
  shifts: [],
};

export const ADD_SHIFT = 'ADD_SHIFT';

export const shiftReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_SHIFT:
      return {
        ...state,
        shifts: [...state.shifts, action.shift],
      };
    default:
      return state;
  }
};
