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

const reducerSearch = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_INIT:
			return {
				...state,
				loading: action.payload.loading
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				search: action.payload.search,
				loading: action.payload.loading
			};
		case SEARCH_ERROR:
			return {
				...state,
				error: action.payload.error
			};
		default:
			return state;
	}
};

export default reducerSearch;
