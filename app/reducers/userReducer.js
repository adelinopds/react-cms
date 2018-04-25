import { LOGOUT } from '../constants/constants';
import { AUTHORIZED, LOGIN_REQUEST } from '../constants/userConstants';

const initialState = {
  user: {
    uuid: 0,
    username: '',
    firstName: '',
    lastName: '',
    token: ''
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
    case LOGIN_REQUEST.ERROR:
      return {
        ...state,
        fetching: false,
        authError: action.payload
      };
    case LOGIN_REQUEST.FULFILLED:
      localStorage.setItem('user-token', action.payload.data.token);
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
