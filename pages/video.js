import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const BoxVideo = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

const Video = styled.div`
	width: 100%;
	height: 40%;
	flex-grow: 1;

	@media (min-width: 574px) {
		height: 50%;
		${console.log('media')}
	}
	@media (min-width: 750px) {
		height: 70%;
	}
`;

const ContainerBody = styled.div`
	background: white;
	display: flex;
	flex-direction: column;
	padding: 0.5rem 1rem;

	h2 {
		font-size: 1.2rem;
	}

	p {
		overflow-wrap: break-word;
		word-wrap: break-word;
	}
`;

const VideoActive = () => {
	const [videoStorage, setVideoStorage] = useState({
		idStorage: '',
		titleStorage: '',
		descriptionStorage: '',
		channelTitleStorage: ''
	});

	const {
		idStorage,
		titleStorage,
		descriptionStorage,
		channelTitleStorage
	} = videoStorage;

	const { id, title, description, channelTitle } = useSelector(
		(state) => state.video
	);

	useEffect(() => {
		const videoStorage = JSON.parse(localStorage.getItem('videoActive'));
		const { id, title, description, channelTitle } = videoStorage;
		setVideoStorage({
			idStorage: id,
			titleStorage: title,
			descriptionStorage: description,
			channelTitleStorage: channelTitle
		});
	}, []);

	return (
		<>
			<BoxVideo>
				<Video>
					<iframe
						autoplay='true'
						id='player'
						type='text/html'
						width='100%'
						height='450px'
						src={`http://www.youtube.com/embed/${
							id ? id : idStorage
						}?enablejsapi=1`}
						frameBorder='0'
					></iframe>
				</Video>
				<ContainerBody>
					<h2>{title ? title : titleStorage}</h2>
					<p>{description ? description : descriptionStorage}</p>
					<p>{channelTitle ? channelTitle : channelTitleStorage}</p>
				</ContainerBody>
			</BoxVideo>
		</>
	);
};

export default VideoActive;
