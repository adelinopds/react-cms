import { SET_FILTER, TOGGLE_FILTERS_COMPONENT } from '../constants/postContants';

const initialState = {
  posts: [],
  showFilters: false,
  filters: {
    keyword: '',
    authors: [],
    categories: [],
    createdDate: '',
  }
};

export default (state = initialState, action) => {

  let filters = {};

  switch (action.type) {

    case SET_FILTER:

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

      if (action.payload.authors) {
        filters = {
          ...state.filters,
          authors: action.payload.authors
        };
      }

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

    case TOGGLE_FILTERS_COMPONENT:
      return {
        ...state,
        showFilters: !state.showFilters
      };
    default:
      return state;
  }
};
