const defaultModerator = {
  moderator: {
    id: 1,
    isAuth: false,
  },
};

export const SET_AUTH = 'SET_AUTH';

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
