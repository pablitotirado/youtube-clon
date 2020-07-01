import {
	USER_INFO_INIT,
	USER_INFO_SUCCESS,
	USER_INFO_ERROR
} from 'types/types-user';

import Http from 'api/client-http';
const user = new Http();

export const UserInfoAction = (token) => async (dispatch) => {
	dispatch({
		type: USER_INFO_INIT,
		payload: {
			loading: true,
			error: false
		}
	});
	try {
		const response = await user.getUserInfo(token);

		dispatch({
			type: USER_INFO_SUCCESS,
			payload: {
				userInfo: response,
				loading: false,
				error: false
			}
		});
	} catch (error) {
		dispatch({
			type: LOGOUT
		});
		Router.push('/');
		dispatch({
			type: USER_INFO_ERROR,
			payload: {
				loading: false,
				error: true,
				errorMessage: error
			}
		});
	}
};
