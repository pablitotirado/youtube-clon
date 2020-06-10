import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

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

export default function Home() {
  const history = useRouter();

  useEffect(() => {
    const validationAuth = () => {
      const token =
        history.asPath !== '/'
          ? history.asPath.slice(15, history.asPath.length - 80)
          : false;
      token && localStorage.setItem('access_token', JSON.stringify(token));
    };
    validationAuth();

    localStorage.getItem('access_token')
      ? history.push('/home')
      : history.push('/');
  }, []);

  return (
    <ScreenSizer>
      <LoginContainer>
        <YoutubeLogo
          src='/static/images/youtubelogo.png'
          alt='youtubeclon logo'
        />
        <h1 className='title'>Please sign in</h1>
        <Button href='https://accounts.google.com/o/oauth2/auth?client_id=409993691741-osl4cle99b42qqh49us39nkep8st0e4j.apps.googleusercontent.com&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/youtube&response_type=token'>
          Login with Google
        </Button>
      </LoginContainer>
    </ScreenSizer>
  );
}
