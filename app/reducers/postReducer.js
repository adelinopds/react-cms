import { SET_FILTER } from '../constants/postContants';

const initialState = {
  posts: [],
  filters: {
    keyword: '',
    authors: [],
    categories: [],
    startDate: '',
    endDate: '',
  }
};

export default (state = initialState, action) => {

  let filters = {};

  switch (action.type) {

    case SET_FILTER:

      if (action.payload.keyword) {
        filters = {
          ...state.filters,
          keyword: action.payload.keyword
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
      if (action.payload.startDate) {
        filters = {
          ...state.filters,
          startDate: action.payload.startDate
        };
      }
      if (action.payload.endDate) {
        filters = {
          ...state.filters,
          endDate: action.payload.endDate
        };
      }

      return {
        ...state,
        filters
      };

    default:
      return state;
  }
};
