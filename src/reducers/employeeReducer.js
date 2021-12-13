const defaultState = {
  employee: {},
};

export const SELECT_EMPLOYEE = 'SELECT_EMPLOYEE';

export const employeeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_EMPLOYEE:
      return {
        ...state,
        employee: action.employee,
      };
    default:
      return state;
  }
};
