import { LOGIN, LOGOUT } from '../constants/constants';

export const loginUser = user => ({
  type: LOGIN,
  payload: user
});

export const logoutUser = () => ({
  type: LOGOUT
});
