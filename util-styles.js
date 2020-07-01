import styled from 'styled-components';

export const BoxCard = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;


	&:hover {
		cursor: pointer;
		opacity: 95%;

		i {
			display: initial;
		}
	}
`;
