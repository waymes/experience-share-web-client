import Router from 'next/router';
import request from '../../utils/request';
import { dispatch } from '../index';

import * as constants from '../constants/auth';
import { routes } from '../../constants';

// eslint-disable-next-line import/prefer-default-export
export const login = async ({ email, password }) => {
  try {
    const { token, user } = await request('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    dispatch({ type: constants.AUTH__LOGIN_SUCCESS, user, token });
    Router.push(routes.protected.profile);
  } catch (error) {
    dispatch({ type: constants.AUTH__LOGIN_ERROR, error });
  }
};
