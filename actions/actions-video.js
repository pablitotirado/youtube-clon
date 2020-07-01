import { LOAD_VIDEO_ACTIVE } from 'types/types-video';

export const loadVideoAction = (id, title, description, channelTitle) => (
	dispatch
) => {
	localStorage.setItem(
		'videoActive',
		JSON.stringify({ id, title, description, channelTitle })
	);
	dispatch({
		type: LOAD_VIDEO_ACTIVE,
		payload: {
			id,
			title,
			description,
			channelTitle
		}
	});
};
