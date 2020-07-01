import { LOAD_VIDEO_ACTIVE } from 'types/types-video';

const initialState = {
	id: '',
	title: '',
	description: '',
	channelTitle: ''
};

const reducerVideo = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_VIDEO_ACTIVE:
			return {
				id: action.payload.id,
				title: action.payload.title,
				description: action.payload.description,
				channelTitle: action.payload.channelTitle
			};
		default:
			return state;
	}
};

export default reducerVideo;
