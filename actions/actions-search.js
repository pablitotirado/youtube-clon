import {
	SEARCH_INIT,
	SEARCH_SUCCESS,
	SEARCH_ERROR
} from '../types/types-search';
import Http from 'api/client-http';

const search = new Http();

export const setSearch = (terms, token) => async (dispatch) => {
	dispatch({
		type: SEARCH_INIT,
		payload: {
			loading: true
		}
	});
	try {
		const response = await search.getSearch(terms, token);
		console.log(response);
		dispatch({
			type: SEARCH_SUCCESS,
			payload: {
				search: response,
				loading: false
			}
		});
	} catch (error) {
		dispatch({
			type: LOGOUT
		});
		Router.push('/');
		dispatch({
			type: SEARCH_ERROR,
			payload: {
				error: true
			}
		});
	}
};
