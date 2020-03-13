import * as actions from './actions';
import * as apiHandlers from './api-handlers';

export const userLogin = () => async dispatch => {
  dispatch(actions.userLoginRequest());
  try {
    const response = await apiHandlers.sendUserLoginRequest();
    localStorage.setItem('loginInfo', JSON.stringify(response));
    dispatch(actions.userLoginSuccess(response));
  } catch (error) {
    dispatch(actions.userLoginFailure(error));
  }
};

export const resetPassword = () => async dispatch => {
  dispatch(actions.resetPasswordRequest());
  try {
    const response = await apiHandlers.sendResetPasswordRequest();
    dispatch(actions.resetPasswordSuccess(response));
  } catch (error) {
    dispatch(actions.resetPasswordFailure(error));
  }
};

export const createNewUser = () => async dispatch => {
  dispatch(actions.createNewUserRequest());
  try {
    const response = await apiHandlers.sendCreateNewUserRequest();
    dispatch(actions.createNewUserSuccess(response));
  } catch (error) {
    dispatch(actions.createNewUserFailure(error));
  }
};
