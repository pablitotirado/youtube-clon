import React, { useState, useEffect } from 'react';
import {
  NavWrapperStyled,
  BoxSidebarStyled,
  BoxChildrenStyled
} from './styles';
//Components
import TopNavDesktop from './topnav-desktop';
import TopNavMobile from './topnav-mobile';

const NavWrapper = ({ children }) => {
  const [topNavOpen, setTopNavOpen] = useState(false);

  return (
    <NavWrapperStyled>
      <TopNavDesktop />
      <TopNavMobile />
      <BoxSidebarStyled></BoxSidebarStyled>
      <BoxChildrenStyled>{children}</BoxChildrenStyled>
    </NavWrapperStyled>
  );
};
export default NavWrapper;
