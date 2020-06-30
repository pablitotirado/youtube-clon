import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loadVideoAction } from 'actions/actions-video';
import Router from 'next/router';
import { BoxCard } from 'util-styles';

const ImageStyled = styled.img`
	height: 13rem;
`;
const TitleStyled = styled.h2`
	font-size: 1.2rem;
	font-weight: 400;
`;
const DescriptionStyled = styled.p`
	font-size: 0.8rem;
	padding: 0.5rem;
`;

const IconPlay = styled.i`
	display: none;
	position: absolute;
	top: 17%;
	left: 40%;
	color: white;
	font-size: 4rem;
`;

const CardVideo = ({ title, img, description, id }) => {
	const dispatch = useDispatch();

	const loadVideo = (id) => {
		dispatch(loadVideoAction(id));
		Router.push('/video');
	};
	return (
		<BoxCard onClick={() => loadVideo(id)}>
			<ImageStyled src={img} alt={title} />
			<TitleStyled>
				{title.includes('&quot;') ? title.replace('&quot;', '') : title}
			</TitleStyled>
			<DescriptionStyled>{description}</DescriptionStyled>
			<IconPlay className='fa fa-play-circle' aria-hidden='true'></IconPlay>
		</BoxCard>
	);
};

export default CardVideo;
