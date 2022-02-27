import { SAVE_EMPLOYEES } from '../constants/constants';

const defaultState = {
  users: [],
};

export const employeeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SAVE_EMPLOYEES:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};
