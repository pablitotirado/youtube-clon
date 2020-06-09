import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { InitApp, Login } from '../actions/actions-auth';

const Titulo = styled.h1`
  color: red;
`;

export default function Home() {
  const history = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const initApp = () => dispatch(InitApp());
    const login = (token) => dispatch(Login(token));
    if (localStorage.getItem('access_token')) {
      initApp();
      history.push('/home');
    }
    if (history.asPath !== '/') {
      const token = history.asPath.slice(15, history.asPath.length - 80);
      login(token);
      history.push('/home');
    } else {
      history.push('/');
    }
  }, []);

  return (
    <div className='container'>
      <Titulo>hola mundo</Titulo>
      <a href='https://accounts.google.com/o/oauth2/auth?client_id=409993691741-osl4cle99b42qqh49us39nkep8st0e4j.apps.googleusercontent.com&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/youtube&response_type=token'>
        ir a google
      </a>
    </div>
  );
}

// const validationAuth = () => {
//   const token =
//     history.asPath !== '/'
//       ? history.asPath.slice(15, history.asPath.length - 80)
//       : false;
//   token && localStorage.setItem('access_token', JSON.stringify(token));
// };
// validationAuth();

// localStorage.getItem('access_token')
//   ? history.push('/home')
//   : history.push('/');
