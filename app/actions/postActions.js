import axios from 'axios';
import { SET_SINGLE_FILTER } from '../constants/postContants';

export const setSingleFilter = (filter) => {
  return {
    type: SET_SINGLE_FILTER,
    payload: filter
  };
};

export const ESLINT = 'wew';
