import React, { useState } from 'react';
import styled from 'styled-components';

//Component
import Logo from './logo';
import InputSearch from '../input-search';
import SearchI from './icon-search';

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
    display: ${(props) => (props.mobile ? 'none' : 'flex')};
    justify-content: flex-start;
    align-items: center;
  }
  .center {
    flex-basis: ${(props) => (props.mobile ? '100%' : '70%')};
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
  background: gray;
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
  margin-right: 0.2rem;

  hr {
    margin: 0.2rem 0;
    width: 1.1rem;
    border: 1px solid #a39ba0;
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const IconSearch = styled.div`
  padding: 0.5rem 0.6rem 0.4rem;
  fill: #a39ba0;
  width: 2.4rem;
  border-radius: 50%;
  margin: auto 0 auto auto;
  cursor: pointer;
  display: ${(props) => (props.mobile ? 'none' : 'initial')};

  &:hover {
    background-color: #e5e5e5;
  }
`;

const NavWrapper = ({ children }) => {
  const [topNavOpen, setTopNavOpen] = useState(false);
  return (
    <NavWrapperStyled>
      <BoxTopNavStyled mobile={topNavOpen}>
        <div className='left'>
          <OptionsTopNav>
            <hr />
            <hr />
            <hr />
          </OptionsTopNav>
          <Logo />
        </div>
        <div className='center'>
          <InputSearch
            topNavOpen={topNavOpen}
            setTopNavOpen={setTopNavOpen}
            mounted={topNavOpen}
          />
          <IconSearch
            mobile={topNavOpen}
            onClick={() => setTopNavOpen(!topNavOpen)}
          >
            <SearchI />
          </IconSearch>
        </div>
        <div className='right'></div>
      </BoxTopNavStyled>
      <BoxSidebarStyled></BoxSidebarStyled>
      <BoxChildrenStyled>{children}</BoxChildrenStyled>
    </NavWrapperStyled>
  );
};
export default NavWrapper;
