import * as URL from './api';
import Server from '../../common/Server';

export const sendGetAllUsersRequest = () => Server.fetchApi(URL.getAllUsers(), { method: 'GET' });
export const sendGetSpecificUserRequest = (id) => Server.fetchApi(URL.getSpecificUser(id), { method: 'GET' });
export const sendGetUserGroupHistoryRequest = (id) => Server.fetchApi(URL.getUserGroupHistory(id), { method: 'GET' });
export const sendGetUserStatusHistoryRequest = (id) => Server.fetchApi(URL.getUserStatusHistory(id), { method: 'GET' });
export const sendUpdateUserRequest = (id) => Server.fetchApi(URL.updateUser(id), { method: 'PUT' });
