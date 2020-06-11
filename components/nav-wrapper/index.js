import React from 'react';
import styled from 'styled-components';

const NavWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(6, 16.66%);
  grid-template-rows: repeat(10, 10%);
`;
const BoxTopNavStyled = styled.div`
  width: 100%;
  grid-column: 1 / 11;
  grid-row: 1 / 2;
  border: 1px solid black;

  h1 {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const BoxSidebarStyled = styled.div`
  border: 1px solid blue;
  grid-column: 1 / 2;
  grid-row: 2 / 11;
  height: 100%;
`;

const BoxChildrenStyled = styled.div`
  border: 1px solid orange;
  grid-column: 2 / 11;
  grid-row: 2 / 11;
`;

const NavWrapper = ({ children }) => {
  return (
    <>
      <NavWrapperStyled>
        <BoxTopNavStyled>
          <h1>hola</h1>
        </BoxTopNavStyled>
        <BoxSidebarStyled>
          <h1>hola</h1>
        </BoxSidebarStyled>
        <BoxChildrenStyled>{children}</BoxChildrenStyled>
      </NavWrapperStyled>
    </>
  );
};

export default NavWrapper;
