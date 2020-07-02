import * as constants from '../constants/profile';

const initialState = {
  user: null,
  coachings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.PROFILE__LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case constants.PROFILE__SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.user,
      };
    case constants.PROFILE__GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case constants.PROFILE__SAVE_CURRENT_USER_SUCCESS:
      return {
        ...state,
        user: action.user
      };
    case constants.PROFILE__LOGOUT:
      return initialState;
    case constants.PROFILE__FETCH_COACHINGS_SUCCESS:
      return {
        ...state,
        coachings: action.coachings
      };
    case constants.PROFILE__CREATE_COACHING_SUCCESS:
      return {
        ...state,
        coachings: [action.coaching, ...state.coachings]
      };
    case constants.PROFILE__DELETE_COACHING_SUCCESS:
      return {
        ...state,
        coachings: state.coachings.filter(el => el.id !== action.id)
      };
    default:
      return state;
  }
};
