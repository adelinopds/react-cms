import { SET_POSTS_DEMO, CREATE_POST_DEMO } from '../constants/demoConstants';
import { posts as blogData } from '../helpers/cmsCustomData';

export const setPostsDemo = () => {
  const posts = blogData;
  return {
    type: SET_POSTS_DEMO,
    payload: posts
  };
};

export const createPostDemo = (post) => {
  return {
    type: CREATE_POST_DEMO,
    payload: post
  };
};
