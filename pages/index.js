import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const Titulo = styled.h1`
  color: red;
`;

const objeto = {
  name: ''
};

export default function Home() {
  const history = useRouter();
  const token = history.asPath.slice(15, history.asPath.length - 80);
  console.log(history);

  return (
    <div className='container'>
      <Titulo>hola mundo</Titulo>

      <a href='https://accounts.google.com/o/oauth2/auth?client_id=409993691741-osl4cle99b42qqh49us39nkep8st0e4j.apps.googleusercontent.com&redirect_uri=http://localhost:3000&scope=https://www.googleapis.com/auth/youtube&response_type=token'>
        ir a google
      </a>
      <button onClick={() => history.push('/prueba')}>ir a ruta nula</button>
    </div>
  );
}
