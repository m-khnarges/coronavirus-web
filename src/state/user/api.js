const backendUrl = 'http://localhost:3000';

export const getAllUsers = () => `${backendUrl}/user`;
export const getSpecificUser = (id) => `${backendUrl}/user/${id}`;

export const getUserGroupHistory = (id) => `${backendUrl}/user/${id}/groupHistory`;
export const getUserStatusHistory = (id) => `${backendUrl}/user/${id}/statusHistory`;

export const updateUser = (id) => `${backendUrl}/user/${id}`;
