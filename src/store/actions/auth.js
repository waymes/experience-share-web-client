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
    return { password: error.message };
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
    console.log(error);
  }
};

export const saveCurrentUser = async ({ firstName, lastName }) => {
  try {
    const user = await request('/api/users/me', {
      method: 'PUT',
      body: { firstName, lastName }
    });
    dispatch({ type: constants.AUTH__SAVE_CURRENT_USER_SUCCESS, user });
  } catch (error) {
    console.log(error);
  }
}
