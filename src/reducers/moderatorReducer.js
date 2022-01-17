const defaultModerator = {
  moderator: {
    id: 1,
    name: 'Алексей Весна',
  },
};

export const SET_MODERATOR = 'SET_MODERATOR';

export const moderatorReducer = (state = defaultModerator, action) => {
  switch (action.type) {
    case ADD_SHIFT:
      return {
        ...state,
        moderator: action.moderator,
      };
    default:
      return state;
  }
};
