import { LOGIN, LOGOUT } from '../constants/constants';

const initialState = {
  user: {
    email: '',
    password: ''
  },
  expire: '',
  authorized: false
};

export default (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authorized: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        user: ''
      };
    default:
      return state;
  }
};
