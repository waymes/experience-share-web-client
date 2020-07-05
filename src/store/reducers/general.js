import * as constants from '../constants/general';

const initialState = {
  categories: [],
  coachings: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GENERAL__FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };
    case constants.GENERAL__SEARCH_COACHING_SUCCESS:
      return {
        ...state,
        coachings: action.coachings,
      };
    default:
      return state;
  }
};
