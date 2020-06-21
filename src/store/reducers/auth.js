import * as constants from '../constants/auth';

const initialState = {
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.AUTH__LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case constants.AUTH__SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case constants.AUTH__GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case constants.AUTH__SAVE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case constants.AUTH__LOGOUT:
      return initialState;
    default:
      return state;
  }
};
