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
    default:
      return state;
  }
};
