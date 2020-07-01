import {
	LOGIN_INIT,
	LOGIN_SUCESS,
	LOGIN_ERROR,
	LOGOUT,
	INIT_APP
} from '../types/types-auth';

const initialState = {
	token: false,
	loading: false,
	error: false,
	errorMessage: ''
};

export default function reducerAuth(state = initialState, action) {
	switch (action.type) {
		case INIT_APP:
			return {
				...state,
				token: action.payload.token
			};
		case LOGIN_INIT:
			return {
				...state,
				loading: action.payload.loading
			};
		case LOGIN_SUCESS:
			localStorage.setItem('access_token', action.payload.token);
			return {
				token: true,
				loading: action.payload.loading,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			};
		case LOGIN_ERROR:
			return {
				token: action.paylaod.token,
				loading: action.payload.loading,
				error: action.payload.error,
				errorMessage: action.payload.errorMessage
			};
		case LOGOUT:
			localStorage.removeItem('access_token');
		default:
			return state;
	}
}
