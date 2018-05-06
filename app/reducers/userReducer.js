import {
  CHANGE_PASSWORD_COGNITO_REQUEST,
  LOGIN_COGNITO_REQUEST,
  LOGOUT
} from '../constants/userConstants';

const initialState = {
  user: {}, // CognitoUser
  expire: '',
  fetching: false,
  authorized: false,
  authError: null
};


export default (state = initialState, action) => {

  switch (action.type) {

    case LOGIN_COGNITO_REQUEST.PENDING:
      return {
        ...state,
        fetching: true
      };
    case LOGIN_COGNITO_REQUEST.REJECTED:
      return {
        ...state,
        fetching: false,
        authError: action.payload
      };
    case LOGIN_COGNITO_REQUEST.FULFILLED:
      return {
        ...state,
        fetching: false,
        user: action.payload
      };

    case CHANGE_PASSWORD_COGNITO_REQUEST.PENDING:
      return {
        ...state,
        fetching: true
      };
    case CHANGE_PASSWORD_COGNITO_REQUEST.REJECTED:
      return {
        ...state,
        fetching: false,
        authError: action.payload
      };
    case CHANGE_PASSWORD_COGNITO_REQUEST.FULFILLED:
      return {
        ...state,
        fetching: false,
        user: action.payload.data
      };

    case LOGOUT:
      localStorage.removeItem('user-token');
      return {
        ...state,
        user: {}
      };

    default:
      return state;
  }
};
