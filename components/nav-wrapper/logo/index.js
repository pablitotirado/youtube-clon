import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.img`
  display: none;

  @media (min-width: 440px) {
		display: initial;
    width: 4rem;
  }
`;
const Logo = () => {
  return (
    <>
      <LogoStyled src='/static/images/youtubelogo.png' />
    </>
  );
};

export default Logo;
