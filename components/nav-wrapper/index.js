import React from 'react';
import styled from 'styled-components';
import SidebarOpen from './sidebar-open';

//Component
import Logo from './logo';
import InputSearch from '../input-search';

const NavWrapperStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 16.66%);
  grid-template-rows: repeat(10, 10%);
`;
const BoxTopNavStyled = styled.div`
  width: 100%;
  grid-column: 1 / 11;
  grid-row: 1 / 2;
  display: flex;
  justify-content: space-around;
  padding: 0 min(0.5rem);

  .left {
    flex-basis: 20%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .center {
    flex-basis: 70%;
    display: flex;
    align-items: center;
  }
  .right {
    display: none;
    flex-basis: 20%;
  }

  @media (min-width: 768px) {
    justify-content: space-between;

    .left {
    }
    .center {
      flex-basis: 50%;
    }
    .right {
      display: initial;
    }
  }
`;

const BoxSidebarStyled = styled.div`
  display: none;
  grid-column: 1 / 2;
  grid-row: 2 / 11;
  height: 100%;
  background: (var --white);
  @media (min-width: 768px) {
    display: initial;
  }
`;

const BoxChildrenStyled = styled.div`
  grid-column: 1 / 11;
  grid-row: 2 / 11;
  background: #e5e5e5;

  @media (min-width: 768px) {
    grid-column: 2 / 11;
  }
`;

const OptionsTopNav = styled.button`
  background: inherit;
  border: none;
  cursor: pointer;
  outline: none;

  hr {
    margin: 0.2rem 0;
    width: 1.1rem;
    border-color: #858585;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const NavWrapper = ({ children }) => (
  <NavWrapperStyled>
    <BoxTopNavStyled>
      <div className='left'>
        <OptionsTopNav>
          <hr />
          <hr />
          <hr />
        </OptionsTopNav>
        <Logo />
      </div>
      <div className='center'>
        <InputSearch />
      </div>
      <div className='right'></div>
    </BoxTopNavStyled>
    <BoxSidebarStyled>
      <SidebarOpen />
    </BoxSidebarStyled>
    <BoxChildrenStyled>{children}</BoxChildrenStyled>
  </NavWrapperStyled>
);

export default NavWrapper;
