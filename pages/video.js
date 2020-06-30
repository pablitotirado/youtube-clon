import React from 'react';
import { useSelector } from 'react-redux';

const VideoActive = () => {
	const videoId = useSelector((state) => state.video.videoActive);
	return (
		<>
			<iframe
				id='player'
				type='text/html'
				autoPlay={true}
				width='50%'
				height='400px'
				src={`http://www.youtube.com/embed/${videoId}?enablejsapi=1`}
				frameBorder='0'
			></iframe>
		</>
	);
};

export default VideoActive;
