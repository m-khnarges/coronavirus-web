import types from './types';

const initialState = {
  isFetching: false,
  user: null,
};

export default function (state = initialState, {type, payload}) {
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case types.USER_LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: payload.response.user
      };
    case types.USER_LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case types.RESET_PASSWORD_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: null
      };
    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: payload.response.user
      };
    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    case types.CREATE_NEW_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        user: null
      };
    case types.CREATE_NEW_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: payload.response.user
      };
    case types.CREATE_NEW_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}
