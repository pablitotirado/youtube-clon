import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
  height: 100%;
  flex: 1 1 auto;
  border: 1px solid #ccc;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 3px;
  outline: none;
`;

const ButtonSearch = styled.button`
  position: relative;
  height: 100%;
  text-indent: -9999px;
  border: 1px solid gray;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  outline: none;

  &:focus {
    border-color: #ccc;
  }
`;
const IconSearch = styled.img`
  width: 1rem;
  position: absolute;
  top: 0.5rem;
  right: 1.5rem;
`;
const BoxInputSearchStyled = styled.div`
  width: 100%;
  height: 2rem;
  margin-right: 0.5rem;
  display: ${(props) => (props.mounted ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;

const ArrowLeft = styled.div`
  font-size: 1.4rem;
  margin: 0 1rem 0 0.5rem;
  cursor: pointer;
  display: ${(props) => (props.mounted ? 'initial' : 'none')};
`;
const InputSearch = ({ mounted, setTopNavOpen, topNavOpen }) => {
  return (
    <>
      <BoxInputSearchStyled mounted={mounted}>
        <ArrowLeft onClick={() => setTopNavOpen(!topNavOpen)} mounted={mounted}>
          &#5176;
        </ArrowLeft>
        <InputStyled placeholder='Buscar' />
        <ButtonSearch>
          Buscar <IconSearch src='/static/images/buscar.svg' />
        </ButtonSearch>
      </BoxInputSearchStyled>
    </>
  );
};

export default InputSearch;
