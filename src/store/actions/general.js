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
