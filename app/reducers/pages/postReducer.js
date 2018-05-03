import { POST } from '../../constants/postContants';

const initialState = {
  selectAll: false,
  selectedPosts: [],
  posts: [],
  showFilters: false,
  filters: {
    keyword: '',
    authors: [],
    categories: [],
    createdDate: '',
  },
  deleted: false
};

export default (state = initialState, action) => {

  let filters = {};

  switch (action.type) {

    case POST.SET_FILTER:

      if (action.payload.keyword && action.payload.keyword !== '') {
        filters = {
          ...state.filters,
          keyword: action.payload.keyword
        };
      } else {
        filters = {
          ...state.filters,
          keyword: ''
        };
      }

      if (action.payload.authors) filters = { ...state.filters, authors: action.payload.authors };
      if (action.payload.categories) {
        filters = {
          ...state.filters,
          categories: action.payload.categories
        };
      }

      if (action.payload.createdDate) {
        filters = {
          ...state.filters,
          createdDate: action.payload.createdDate
        };
      }

      return {
        ...state,
        filters
      };

    case POST.TOGGLE_FILTERS_COMPONENT:
      return {
        ...state,
        showFilters: !state.showFilters
      };

    case POST.SET_SELECTED_POSTS:
      return {
        ...state,
        selectedPosts: action.payload.posts,
        selectAll: action.payload.selectAll
      };

    case POST.GET_POSTS:
      return {
        ...state,
        posts: action.payload
      };

    case POST.DELETE_POSTS:
      return {
        ...state,
        posts: action.payload,
        deleted: true
      };

    // TODO : will be remove replaced by redux-promise()
    case POST.RESET_FETCHING_SETTINGS:
      return {
        ...state,
        selectedPosts: [],
        deleted: false
      };
    default:
      return state;
  }
};
