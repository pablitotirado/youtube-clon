import styled from 'styled-components';

export const NavWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 8.33%);
  grid-template-rows: repeat(10, 10%);
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

  @media (min-width: 768px) {
    grid-column: ${(props) => (props.changeSidebar ? 2 : 3)} / fill;
  }
`;
