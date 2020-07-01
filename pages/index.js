import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { InitApp, LoginAction } from '../actions/actions-auth';

const ScreenSizer = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	background-color: #f5f5f5;
`;
const LoginContainer = styled.div`
	min-width: 25%;
	padding: 3rem 1rem;
	border: 1px solid #dedede;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: white;

	.title {
		color: #606060;
		font-weight: 400;
		font-size: 1.8rem;
	}
`;

const YoutubeLogo = styled.img`
	width: 10rem;
`;

const Button = styled.a`
	width: 100%;
	display: block;
	background-color: red;
	border: none;
	color: white;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	font-weight: 500;
	font-size: 1.3rem;
	padding: 1rem;
`;

export default function Login() {
	const history = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		const initApp = () => dispatch(InitApp());
		const login = (token) => dispatch(LoginAction(token));
		if (localStorage.getItem('access_token')) {
			Router.push('/home');
			initApp();
		}
		if (history.asPath !== '/') {
			const token = window.location.hash.slice(14, history.asPath.length - 152);
			login(token);
			Router.push('/home');
		}
		if (history.asPath === '/' && !localStorage.getItem('access_token')) {
			Router.push('/');
		}
	}, []);

	const location =
		window.location.hostname === 'localhost'
			? 'http://localhost:3000'
			: 'https://youtube-clon.vercel.app';

	return (
		<ScreenSizer>
			<LoginContainer>
				<YoutubeLogo
					src='/static/images/youtubelogo.png'
					alt='youtubeclon logo'
				/>
				<h1 className='title'>Please sign in</h1>
				<Button
					href={`https://accounts.google.com/o/oauth2/auth?client_id=409993691741-osl4cle99b42qqh49us39nkep8st0e4j.apps.googleusercontent.com&redirect_uri=${location}&scope=https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/userinfo.profile&response_type=token`}
				>
					Login with Google
				</Button>
			</LoginContainer>
		</ScreenSizer>
	);
}
