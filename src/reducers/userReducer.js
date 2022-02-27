import { FETCH_EMPLOYEES, SAVE_EMPLOYEES } from '../constants/constants';

const defaultState = {
  users: [
    {
      id: 0,
      name: 'Павел Петров',
    },
  ],
};

export const userReducer = (state = defaultState, action) => {
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
