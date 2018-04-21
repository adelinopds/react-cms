import { LOGIN, LOGOUT } from '../constants/constants';

export const loginUser = token => ({
  type: LOGIN,
  payload: token
});

export const logoutUser = () => ({
  type: LOGOUT
});
