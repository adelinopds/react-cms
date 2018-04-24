import { LOGIN, LOGOUT } from '../constants/constants';
import { LOGIN_REQUEST } from '../constants/userConstants';

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

      // save data to local storage and rediredct with 'history'
      return {
        ...state,
        authorized: true,
        fetching: false,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        authorized: false,
        user: {}
      };
    default:
      return state;
  }
};
