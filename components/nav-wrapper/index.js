import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
	NavWrapperStyled,
	BoxSidebarStyled,
	BoxChildrenStyled
} from './styles';
//Components
import TopNavDesktop from './topnav-desktop';
import TopNavMobile from './topnav-mobile';
import Loader from 'components/loading';

const NavWrapper = ({ children }) => {
	const [topNavOpen, setTopNavOpen] = useState(false);
	const [sidebar, setSidebar] = useState(false);
	const { loading } = useSelector((state) => state.search);
	return (
		<>
			<Loader
				width='100%'
				height='2px'
				css={`
					position: fixed;
					bottom: 0;
					width: 200px;
				`}
				color='red'
				loading={loading}
			/>
			<NavWrapperStyled>
				<TopNavDesktop show={() => setSidebar(!sidebar)} />
				<TopNavMobile />
				<BoxChildrenStyled changeSidebar={sidebar}>
					{children}
				</BoxChildrenStyled>
			</NavWrapperStyled>
		</>
	);
};
export default NavWrapper;
