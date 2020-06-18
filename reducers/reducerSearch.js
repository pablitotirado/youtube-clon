import {
  SEARCH_INIT,
  SEARCH_SUCCESS,
  SEARCH_ERROR
} from '../types/types-search';

const initialState = {
  search: [],
  loading: false,
  error: false
};

export const reducerSearch = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_INIT:
      return {};
    default:
      return state;
  }
};
