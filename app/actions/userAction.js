import axios from 'axios';

import { LOGOUT } from '../constants/constants';
import { LOGIN_REQUEST } from '../constants/userConstants';

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
