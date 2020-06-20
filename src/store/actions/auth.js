import Router from 'next/router';
import request from '../../utils/request';
import { dispatch } from '../index';

import * as constants from '../constants/auth';
import { routes } from '../../constants';

export const login = async ({ email, password }) => {
  try {
    const { token, user } = await request('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    dispatch({ type: constants.AUTH__LOGIN_SUCCESS, user, token });
    Router.push(routes.protected.profile);
    document.cookie = `token=${token}`;
  } catch (error) {
    dispatch({ type: constants.AUTH__LOGIN_ERROR, error });
  }
};

export const getCurrentUser = async (cookie) => {
  try {
    const token = cookie && cookie.substring('token='.length)
    const headers = { authorization: token };
    const user = await request('/api/users/me', { method: 'GET', headers });
    dispatch({ type: constants.AUTH__GET_CURRENT_USER_SUCCESS, user });
    return user;
  } catch (error) {
    dispatch({ type: constants.AUTH__GET_CURRENT_USER_ERROR, error });
  }
};
