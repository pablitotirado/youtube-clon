import React from 'react';
import styled from 'styled-components';

const BoxInputSearchStyled = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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
const InputSearch = () => {
  return (
    <>
      <BoxInputSearchStyled>
        <InputStyled placeholder='Buscar' />
        <ButtonSearch>
          Buscar <IconSearch src='/static/images/buscar.svg' />
        </ButtonSearch>
      </BoxInputSearchStyled>
    </>
  );
};

export default InputSearch;
