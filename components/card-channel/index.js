import React from 'react';
import { BoxCard } from 'util-styles';
import styled from 'styled-components';

const ImageStyled = styled.img`
	padding: 0.5rem 1.8rem;
	height: 14rem;
	border-radius: 50%;
`;
const TitleStyled = styled.h2`
	font-size: 1rem;
	font-weight: 400;
	text-align: center;
	overflow-wrap: break-word;
	word-wrap: break-word;
`;
const DescriptionStyled = styled.p`
	font-size: 0.8rem;
	padding: 0.5rem;
`;

const CardChannel = ({ title, img, description, id }) => {
	return (
		<BoxCard>
			<ImageStyled src={img} />
			<TitleStyled>
				{title
					.replace('&quot;', '')
					.replace('&quot;', '')
					.replace('&amp;', '')}
			</TitleStyled>
		</BoxCard>
	);
};

export default CardChannel;
