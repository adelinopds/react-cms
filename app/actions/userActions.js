import axios from 'axios';
import { Auth } from 'aws-amplify';

import {
  FAKE_AUTORIZATION,
  LOGIN_REQUEST,
  LOGIN_COGNITO_REQUEST,
  LOGOUT
} from '../constants/userConstants';

export const loginUser = user => ({
  type: LOGIN_REQUEST.BASE,
  payload: axios.post('http://localhost:3333/api/users/authenticate', {
    username: user.email,
    password: user.password
  })
});

export const loginCognitoUser = user => ({
  type: LOGIN_COGNITO_REQUEST.BASE,
  payload: Auth.signIn(user.email, user.password)
});

export const logoutUser = () => ({
  type: LOGOUT
});

export const fakeLoginUser = (username, password) => ({
  type: FAKE_AUTORIZATION,
  payload: {
    username,
    password
  }
});
