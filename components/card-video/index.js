import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadVideoAction } from 'actions/actions-video';
import Router from 'next/router';
import { BoxCard } from 'util-styles';

const ImageStyled = styled.img`
	height: 13rem;
`;
const TitleStyled = styled.p`
	width: 100%;
	font-size: 1rem;
	font-weight: 400;
	overflow-wrap: break-word;
	word-wrap: break-word;
	letter-spacing: 0.5px;
	text-align: center;
`;
const DescriptionStyled = styled.p`
	font-size: 0.8rem;
	padding: 0.5rem;
`;

const IconPlay = styled.i`
	display: none;
	position: absolute;
	top: 25%;
	left: 40%;
	color: white;
	font-size: 4rem;
`;

const CardVideo = ({ title, img, description, id, channelTitle }) => {
	const dispatch = useDispatch();

	const loadVideo = (id, title, description, channelTitle) => {
		dispatch(loadVideoAction(id, title, description, channelTitle));
		Router.push('/video');
	};

	return (
		<BoxCard onClick={() => loadVideo(id, title, description, channelTitle)}>
			<ImageStyled src={img} alt={title} />

			<TitleStyled>
				{title
					.replace('&quot;', '"')
					.replace('&quot;', '"')
					.replace('&amp;', '')
					.replace('&amp;', '')}
			</TitleStyled>

			<IconPlay className='fa fa-play-circle' aria-hidden='true'></IconPlay>
		</BoxCard>
	);
};

export default CardVideo;
