import { LOAD_VIDEO_ACTIVE } from 'types/types-video';

const initialState = {
	videoActive: ''
};

const reducerVideo = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO_ACTIVE:
			return {
				videoActive: action.payload.videoActive
			};
		default:
			return state;
	}
};

export default reducerVideo;
