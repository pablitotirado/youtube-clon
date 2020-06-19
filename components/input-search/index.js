import React, { useState } from 'react';
import {
  InputStyled,
  ButtonSearch,
  IconSearch,
  BoxInputSearchStyled
} from './styles';

import ArrowLeft from 'components/arrow-left';

const InputSearch = ({ mobile, onClick = null }) => {
  return (
    <>
      <BoxInputSearchStyled>
        <ArrowLeft onClick={() => onClick()} />
        <InputStyled placeholder='Buscar' />
        <ButtonSearch>
          Buscar <IconSearch src='/static/images/buscar.svg' />
        </ButtonSearch>
      </BoxInputSearchStyled>
    </>
  );
};

export default InputSearch;
