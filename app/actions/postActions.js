import axios from 'axios';
import {
  SET_FILTER,
  TOGGLE_FILTERS_COMPONENT
} from '../constants/postContants';

export const setSearchFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: filter
  };
};

export const toggleFiltersComponent = () => {
  return {
    type: TOGGLE_FILTERS_COMPONENT
  };
};
