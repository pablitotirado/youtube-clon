import React from 'react';
import { BoxCard } from 'util-styles';
import styled from 'styled-components';

const ImageStyled = styled.img`
	padding: 0.5rem 1rem;
	height: 17rem;
	border-radius: 50%;
`;
const TitleStyled = styled.h2`
	font-size: 1.2rem;
	font-weight: 400;
	text-align: center;
`;
const DescriptionStyled = styled.p`
	font-size: 0.8rem;
	padding: 0.5rem;
`;

const CardChannel = ({ title, img, description, id }) => {
	return (
		<BoxCard>
			<ImageStyled src={img} />
			<TitleStyled>{title}</TitleStyled>
			<DescriptionStyled>{description}</DescriptionStyled>
		</BoxCard>
	);
};

export default CardChannel;
