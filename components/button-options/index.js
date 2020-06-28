import React from 'react';
import styled from 'styled-components';
import { ButtonOptionsStyled } from './styles';

const ButtonOptions = ({ click }) => (
  <ButtonOptionsStyled onClick={click}>
    <hr />
    <hr />
    <hr />
  </ButtonOptionsStyled>
);

export default ButtonOptions;
