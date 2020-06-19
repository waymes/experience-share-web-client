import * as constants from '../constants/auth';

const initialState = {
  token: null,
  user: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.AUTH__LOGIN_SUCCESS:
      return {
        ...state,
        token: action.token,
        user: action.user,
        error: null,
      };
    case constants.AUTH__LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case constants.AUTH__GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};
