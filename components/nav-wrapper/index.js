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
  const [sidebar, setSidebar] = useState(false);

  return (
    <NavWrapperStyled>
      <TopNavDesktop show={() => setSidebar(!sidebar)} />
      <TopNavMobile />
      <BoxSidebarStyled></BoxSidebarStyled>
      <BoxChildrenStyled changeSidebar={sidebar}>{children}</BoxChildrenStyled>
    </NavWrapperStyled>
  );
};
export default NavWrapper;
