import * as constants from '../constants/general';

const initialState = {
  categories: [],
  coachings: {
    list: [],
    totalCount: null,
    selected: null,
  },
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
        coachings: {
          ...state.coachings,
          list: action.coachings,
          totalCount: action.totalCount,
        },
      };
    case constants.GENERAL__GET_COACHING_SUCCESS:
      return {
        ...state,
        coachings: {
          ...state.coachings,
          selected: action.coaching,
        },
      };
    default:
      return state;
  }
};
