import axios from 'axios';
import {
  SET_FILTER,
  SET_POSTS_DATA,
  SET_SELECTED_POSTS,
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

export const setSelectedPosts = (posts, selectAll) => {

  console.log(selectAll, 'selectAll');
  return {
    type: SET_SELECTED_POSTS,
    payload: {
      posts,
      selectAll
    }
  };
};


export const setPostsData = posts => ({
  type: SET_POSTS_DATA,
  payload: posts
});
