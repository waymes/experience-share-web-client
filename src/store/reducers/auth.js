import * as constants from '../constants/auth';

const initialState = {
  user: null,
  coachings: [],
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
    case constants.AUTH__FETCH_COACHINGS_SUCCESS:
      return {
        ...state,
        coachings: action.coachings
      };
    case constants.AUTH__CREATE_COACHING_SUCCESS:
      return {
        ...state,
        coachings: [action.coaching, ...state.coachings]
      };
    default:
      return state;
  }
};
