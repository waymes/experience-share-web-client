import request from '../../utils/request';
import { push } from '../../utils/router';
import { dispatch } from '../index';
import * as constants from '../constants/profile';
import { routes } from '../../constants';

export const login = async ({ email, password }) => {
  try {
    const { token, user } = await request('/api/auth/login', {
      method: 'POST',
      body: { email, password },
    });
    dispatch({ type: constants.PROFILE__LOGIN_SUCCESS, user });
    push(routes.protected.profile);
    document.cookie = `token=${token}`;
    return null;
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
    dispatch({ type: constants.PROFILE__SIGNUP_SUCCESS, user });
    document.cookie = `token=${token}`;
    push(routes.protected.profile);
    return null;
  } catch (error) {
    if (error.statusCode === 409) {
      return { email: 'Такая почта уже существует' };
    }
    return null;
  }
};

export const logout = () => {
  dispatch({ type: constants.PROFILE__LOGOUT });
  document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  push(routes.login);
};

export const getCurrentUser = async (cookie) => {
  try {
    const headers = { authorization: cookie };
    const user = await request('/api/users/me', { method: 'GET', headers });
    dispatch({ type: constants.PROFILE__GET_CURRENT_USER_SUCCESS, user });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const saveCurrentUser = async ({ firstName, lastName }) => {
  try {
    const user = await request('/api/users/me', {
      method: 'PATCH',
      body: { firstName, lastName },
    });
    dispatch({ type: constants.PROFILE__SAVE_CURRENT_USER_SUCCESS, user });
  } catch (error) {
    console.log(error);
  }
};

export const fetchMyCoachings = async (cookie) => {
  try {
    const headers = { authorization: cookie };
    const { coachings, totalCount } = await request('/api/coachings/my', { method: 'GET', headers: cookie ? headers : null });
    dispatch({ type: constants.PROFILE__FETCH_COACHINGS_SUCCESS, coachings, totalCount });
  } catch (error) {
    console.log(error);
  }
};

export const getCoaching = async (id) => {
  try {
    const coaching = await request(`/api/coachings/${id}`, { method: 'GET' });
    dispatch({ type: constants.PROFILE__GET_COACHING_SUCCESS, coaching });
    return coaching;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const createCoaching = async (values) => {
  try {
    const coaching = await request('/api/coachings', { method: 'POST', body: values });
    dispatch({ type: constants.PROFILE__CREATE_COACHING_SUCCESS, coaching });
    push(routes.protected.editCoaching(coaching.id));
  } catch (error) {
    console.log(error);
  }
};

export const updateCoaching = async (values) => {
  try {
    await request(`/api/coachings/${values.id}`, { method: 'PATCH', body: values });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCoaching = async (id) => {
  try {
    await request(`/api/coachings/${id}`, { method: 'DELETE' });
    dispatch({ type: constants.PROFILE__DELETE_COACHING_SUCCESS, id });
    push(routes.protected.coachings);
  } catch (error) {
    console.log(error);
  }
};
