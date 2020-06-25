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
    dispatch({ type: constants.AUTH__LOGIN_SUCCESS, user });
    Router.push(routes.protected.profile);
    document.cookie = `token=${token}`;
  } catch (error) {
    return { password: 'Почта или пароль не верны' };
  }
};

export const signup = async ({ firstName, lastName, email, password }) => {
  try {
    const { token, user } = await request('/api/auth/signup', {
      method: 'POST',
      body: { firstName, lastName, email, password },
    });
    dispatch({ type: constants.AUTH__SIGNUP_SUCCESS, user });
    document.cookie = `token=${token}`;
    Router.push(routes.protected.profile);
  } catch (error) {
    if (error.statusCode === 409) {
      return { email: 'Такая почта уже существует' };
    }
  }
};

export const logout = () => {
  dispatch({ type: constants.AUTH__LOGOUT });
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  Router.push(routes.login);
}

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
      method: 'PATCH',
      body: { firstName, lastName }
    });
    dispatch({ type: constants.AUTH__SAVE_CURRENT_USER_SUCCESS, user });
  } catch (error) {
    console.log(error);
  }
}
