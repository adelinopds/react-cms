import { CREATE_POST_DEMO, SET_POSTS_DEMO, UPDATE_POSTS_DEMO } from '../constants/demoConstants';

const initialState = {
  posts: [],
  postsLoaded: false
};

export default (state = initialState, action) => {

  switch (action.type) {

    case SET_POSTS_DEMO:
      return {
        ...state,
        posts: action.payload,
        postsLoaded: true
      };

    case CREATE_POST_DEMO:
      return {
        ...state,
        posts: state.posts.concat(action.payload),
      };

    case UPDATE_POSTS_DEMO:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
