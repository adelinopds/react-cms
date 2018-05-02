import { SET_REDIRECT_URL } from '../constants/viewConstants';

export const setRedirectUrl = (url) => ({
  type: SET_REDIRECT_URL,
  payload: url
});
