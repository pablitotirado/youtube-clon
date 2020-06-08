import Head from "next/head";
import styled from 'styled-components'

const Titulo = styled.h1`
  color: red;
`;

export default function Home() {
  return (
    <div className="container">
      <Titulo>hola mundo</Titulo>
    </div>
  );
}
