import axios from 'axios';
import { Auth } from 'aws-amplify';

import {
  LOGIN_COGNITO_REQUEST,
  LOGOUT, CHANGE_PASSWORD_COGNITO_REQUEST
} from '../constants/userConstants';

export const loginUser = (username, password) => ({
  type: LOGIN_COGNITO_REQUEST.BASE,
  payload: Auth.signIn(username, password)
});

export const changePassword = (user, oldPassword, newPassword) => ({
  type: CHANGE_PASSWORD_COGNITO_REQUEST.BASE,
  payload: Auth.changePassword(user, oldPassword, newPassword)
});

export const logoutUser = () => ({
  type: LOGOUT
});
