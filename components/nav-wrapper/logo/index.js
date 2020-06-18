import React from 'react';
import styled from 'styled-components';

const LogoStyled = styled.img`
  width: 4rem;
`;
const Logo = () => {
  return (
    <>
      <LogoStyled src='/static/images/youtubelogo.png' />
    </>
  );
};

export default Logo;
