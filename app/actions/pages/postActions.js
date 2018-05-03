import axios from 'axios';
import _ from 'lodash';
import {
  PAGE,
  SET_FILTER,
  GET_POSTS,
  SET_POSTS_DEMO,
  SET_SELECTED_POSTS,
  TOGGLE_FILTERS_COMPONENT, DELETE_POSTS, RESET_FETCHING_SETTINGS, POST
} from '../../constants/postContants';

export const setSearchFilter = (filter) => {
  return {
    type: PAGE.SET_FILTER,
    payload: filter
  };
};

export const toggleFiltersComponent = () => {
  return {
    type: PAGE.TOGGLE_FILTERS_COMPONENT
  };
};

export const setSelectedPosts = (posts, selectAll) => {

  console.log(selectAll, 'selectAll');
  return {
    type: PAGE.SET_SELECTED_POSTS,
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
  return {
    type: PAGE.GET_POSTS,
    payload: ''// axios.get('/posts');
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
    type: PAGE.DELETE_POSTS,
    payload: posts
  };
};

export const resetFetchingSettings = () => {
  return {
    type: PAGE.RESET_FETCHING_SETTINGS
  };
};
