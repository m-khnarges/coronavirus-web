const backendUrl = 'http://localhost:3000';

// @GET("v2/user/credit")
export const userLogin = () => `${backendUrl}/authenticate`;

// @GET("v2/user/credit/history/{limit}/{page}")
export const getUserCreditHistory = (limit, page) =>
  `${backendUrl}/v2/user/credit/history/${limit}/${page}`;
