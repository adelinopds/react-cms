import axios from 'axios';
import { SET_FILTER } from '../constants/postContants';

export const setSearchFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export const ESLINT = 'wew';
