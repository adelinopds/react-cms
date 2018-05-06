import {
  FAKE_AUTORIZATION, LOGIN_COGNITO_REQUEST,
  LOGIN_REQUEST,
  LOGOUT
} from '../constants/userConstants';

const initialState = {
  user: {
    uuid: 0,
    username: '',
    firstName: '',
    lastName: '',
    token: '',
  },
  expire: '',
  fetching: false,
  authorized: false,
  authError: null
};


export default (state = initialState, action) => {

  switch (action.type) {

    case LOGIN_REQUEST.PENDING:
      return {
        ...state,
        fetching: true
      };
    case LOGIN_REQUEST.REJECTED:
      return {
        ...state,
        fetching: false,
        authError: action.payload
      };
    case LOGIN_REQUEST.FULFILLED:
      if (action.payload.data.token) {
        localStorage.setItem('user-token', action.payload.data.token);
        return {
          ...state,
          fetching: false,
          user: action.payload.data
        };
      }
      return {
        ...state,
        fetching: false,
        authError: action.payload.data.error
      };

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
      if (action.payload.data.token) {
        localStorage.setItem('user-token', action.payload.data.token);
        return {
          ...state,
          fetching: false,
          user: action.payload.data
        };
      }
      return {
        ...state,
        fetching: false,
        authError: action.payload.data.error
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
