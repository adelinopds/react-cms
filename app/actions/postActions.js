import axios from 'axios';
import _ from 'lodash';
import {
  SET_FILTER,
  GET_POSTS,
  SET_SELECTED_POSTS,
  TOGGLE_FILTERS_COMPONENT, DELETE_POSTS, RESET_FETCHING_SETTINGS
} from '../constants/postContants';
import { posts as blogData } from '../helpers/cmsCustomData';

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

export const getPosts = (filters) => {

  if (filters) {
    // get variables by filter. TODO on API site
  }
  const posts = blogData;
  return {
    type: GET_POSTS,
    payload: posts
  };
};

export const deletePosts = (selected, all) => {

  const ids = selected.map(item => item.id);
  const posts = _.filter(all, (post) => {
    if (!_.find(ids, id => post.id === id)) {
      return post;
    }
    return null;
  });

  return {
    type: DELETE_POSTS,
    payload: posts
  };
};

export const resetFetchingSettings = () => {
  return {
    type: RESET_FETCHING_SETTINGS
  };
};
