import types from './types';

export const getAllUsersRequest = () => ({
  type: types.GET_ALL_USERS_REQUEST,
});

export const getAllUsersSuccess = response => ({
  type: types.GET_ALL_USERS_SUCCESS,
  payload: { response }
});

export const getAllUsersFailure = error => ({
  type: types.GET_ALL_USERS_SUCCESS,
  payload: { error }
});

export const getSpecificUserRequest = () => ({
  type: types.GET_SPECIFIC_USER_REQUEST,
});

export const getSpecificUserSuccess = response => ({
  type: types.GET_SPECIFIC_USER_SUCCESS,
  payload: { response }
});

export const getSpecificUserFailure = error => ({
  type: types.GET_SPECIFIC_USER_FAILURE,
  payload: { error }
});

export const getUserGroupHistoryRequest = () => ({
  type: types.GET_USER_GROUP_HISTORY_REQUEST,
});

export const getUserGroupHistorySuccess = response => ({
  type: types.GET_USER_GROUP_HISTORY_SUCCESS,
  payload: { response }
});

export const getUserGroupHistoryFailure = error => ({
  type: types.GET_USER_GROUP_HISTORY_REQUEST,
  payload: { error }
});

export const getUserStatusHistoryRequest = () => ({
  type: types.GET_USER_STATUS_HISTORY_REQUEST,
});

export const getUserStatusHistorySuccess = response => ({
  type: types.GET_USER_STATUS_HISTORY_SUCCESS,
  payload: { response }
});

export const getUserStatusHistoryFailure = error => ({
  type: types.GET_USER_STATUS_HISTORY_FAILURE,
  payload: { error }
});

export const updateUserRequest = () => ({
  type: types.UPDATE_USER_REQUEST,
});

export const updateUserSuccess = response => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: { response }
});

export const updateUserFailure = error => ({
  type: types.UPDATE_USER_FAILURE,
  payload: { error }
});

