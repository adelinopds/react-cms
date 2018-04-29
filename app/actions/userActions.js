import axios from 'axios';

import { LOGIN_REQUEST, LOGOUT } from '../constants/userConstants';

export const loginUser = user => ({
  type: LOGIN_REQUEST.BASE,
  payload: axios.post('http://localhost:3333/api/users/authenticate', {
    username: user.email,
    password: user.password
  })
});

export const logoutUser = () => ({
  type: LOGOUT
});
