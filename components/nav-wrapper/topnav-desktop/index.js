import React from 'react';
import { useDispatch } from 'react-redux';
import { Logout } from 'actions/actions-auth';
import { BoxTopNavDesktop } from './styles';
import Logo from 'components/logo';
import InputSearch from 'components/input-search';
import ButtonOptions from 'components/button-options';
import UserProfile from 'components/user-profile';
import styled from 'styled-components';

const LogoutStyled = styled.button`
	border: none;
	padding: 0.4rem 1rem;
	margin-left: 1rem;
	border-radius: 5px;
	border: 1px solid #ccc;
	color: #a39ba0;
`;

const TopNavDesktop = ({ show }) => {
	const dispatch = useDispatch();
	return (
		<BoxTopNavDesktop>
			<div className='left'>
				<Logo />
			</div>
			<div className='center'>
				<InputSearch />
			</div>
			<div className='right'>
				<UserProfile />
				<LogoutStyled onClick={() => dispatch(Logout())}>Salir</LogoutStyled>
			</div>
		</BoxTopNavDesktop>
	);
};

export default TopNavDesktop;
