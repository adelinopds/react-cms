import { POST } from '../../constants/postContants';

const initialState = {
  post: {
    uuid: '',
    title: '',
    content: '',
    author: {},
    categories: [],
    createdAt: ''
  }
};

export default (state = initialState, action) => {

  switch (action.type) {

    case POST.SET:
      return {
        ...state,
        post: action.payload,
      };

    case POST.UPDATE:
      return {
        ...state,
        post: { ...action.payload }
      };
    default:
      return state;
  }
};
