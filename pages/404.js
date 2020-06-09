import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Error = () => {
  const history = useRouter();
  useEffect(() => {
    history.push('/');
  }, []);
  return <h1>upps hubo un error</h1>;
};

export default Error;
