import types from './types';

export const userLoginRequest = () => ({
  type: types.USER_LOGIN_REQUEST,
});

export const userLoginSuccess = response => ({
  type: types.USER_LOGIN_SUCCESS,
  payload: { response }
});

export const userLoginFailure = error => ({
  type: types.USER_LOGIN_FAILURE,
  payload: { error }
});

export const resetPasswordRequest = () => ({
  type: types.RESET_PASSWORD_REQUEST,
});

export const resetPasswordSuccess = response => ({
  type: types.RESET_PASSWORD_SUCCESS,
  payload: { response }
});

export const resetPasswordFailure = error => ({
  type: types.RESET_PASSWORD_FAILURE,
  payload: { error }
});

export const createNewUserRequest = () => ({
  type: types.CREATE_NEW_USER_REQUEST,
});

export const createNewUserSuccess = response => ({
  type: types.CREATE_NEW_USER_SUCCESS,
  payload: { response }
});

export const createNewUserFailure = error => ({
  type: types.CREATE_NEW_USER_FAILURE,
  payload: { error }
});
