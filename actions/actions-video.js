import { LOAD_VIDEO_ACTIVE } from 'types/types-video';

export const loadVideoAction = (idVideo) => (dispatch) => {
	dispatch({
		type: LOAD_VIDEO_ACTIVE,
		payload: {
			videoActive: idVideo
		}
	});
};
