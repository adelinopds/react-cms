import { SET_REDIRECT_URL } from '../constants/viewConstants';

const initialState = {
  currentURL: '',
};

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_REDIRECT_URL:
      return {
        ...state,
        redirectUrl: action.payload,
      };
    default:
      return state;
  }
};
