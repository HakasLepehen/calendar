import { SAVE_USERS } from '../constants/constants';

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
    case SAVE_USERS:
      return {
        ...state,
        users: action.users,
      };

    default:
      return state;
  }
};
