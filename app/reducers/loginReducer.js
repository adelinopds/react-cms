import { LOGIN, LOGOUT } from '../constants/constants';

const initialState = {
  userToken: '',
  expire: ''
};

export default (state = initialState, action) => {

  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        token: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        token: ''
      };
    default:
      return state;
  }
};
