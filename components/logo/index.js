import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const LogoStyled = styled.img`
  width: ${({ size }) => size};
`;
const Logo = ({ size }) => (
  <Link href='/home'>
    <a>
      <LogoStyled size={size} src='/static/images/youtubelogo.png' />
    </a>
  </Link>
);

Logo.defaultProps = {
  size: '4rem'
};

export default Logo;
