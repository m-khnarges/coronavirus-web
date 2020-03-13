const backendUrl = 'http://localhost:3000';

export const userLogin = () => `${backendUrl}/authenticate`;
export const resetPassword = () => `${backendUrl}/authenticate`;
export const createNewUser = () => `${backendUrl}/user`;
