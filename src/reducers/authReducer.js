import { SET_AUTH } from '../constants/constants';

const defaultModerator = {
  isAuth: false,
};

export const authReducer = (state = defaultModerator, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
