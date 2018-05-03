import { POST } from '../../constants/postContants';

export const selectPost = (post) => ({
  type: POST.SELECT,
  payload: post
});

export const updatePostTitle = (title) => ({
  type: POST.UPDATE,
  payload: { title }
});

export const updatePostContent = (content) => ({
  type: POST.UPDATE,
  payload: { content }
});

export const updatePostAuthor = (author) => ({
  type: POST.UPDATE,
  payload: { author }
});

export const updatePostCategories = (categories) => ({
  type: POST.UPDATE,
  payload: { categories }
});
