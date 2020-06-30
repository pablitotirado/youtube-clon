import styled from 'styled-components';

export const NavWrapperStyled = styled.div`
	width: 100%;
	height: min-content;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(113px, 1fr));
	grid-auto-rows: auto;
`;

export const BoxSidebarStyled = styled.div`
	display: none;
	grid-column: 1 / ${(props) => (props.changeSidebar ? 2 : 3)};
	grid-row: 2 / 11;
	height: 100%;
	background: gray;
	@media (min-width: 768px) {
		display: initial;
	}
`;

export const BoxChildrenStyled = styled.div`
	grid-column: 1 / 22;
	grid-row: 2 / 11;
	background: #e5e5e5;
	height: 100%;
	min-height: 100vh;

	@media (min-width: 1024px) {
		grid-column: 1 / 22;
		padding: 0.5rem;
	}
`;
