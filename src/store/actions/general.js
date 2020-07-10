import request from '../../utils/request';
import { dispatch } from '../index';

import * as constants from '../constants/general';

export const getCategories = async () => {
  try {
    const categories = await request('/api/categories', { method: 'GET' });
    dispatch({ type: constants.GENERAL__FETCH_CATEGORIES_SUCCESS, categories });
  } catch (error) {
    console.log(error);
  }
};

export const searchCoachings = async (url) => {
  try {
    const queryString = url.split('?')[1] || '';
    const { coachings, totalCount } = await request(`/api/coachings?${queryString}`);
    dispatch({ type: constants.GENERAL__SEARCH_COACHING_SUCCESS, coachings, totalCount });
  } catch (error) {
    console.log(error);
  }
};
