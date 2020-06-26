import * as constants from '../constants/general';

const initialState = {
  categories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GENERAL__FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.categories,
      };
    default:
      return state;
  }
};
