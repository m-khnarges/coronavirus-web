import * as URL from './api';
import Server from '../../common/Server';

export const sendUserLoginRequest = () => Server.fetchApi(URL.userLogin(), { method: 'POST' });
export const sendResetPasswordRequest = () => Server.fetchApi(URL.resetPassword(), { method: 'PUT' });
export const sendCreateNewUserRequest = () => Server.fetchApi(URL.createNewUser(), { method: 'POST' });
