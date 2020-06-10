import React from 'react';
import styled from 'styled-components';

const ScreenSizer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorContainer = styled.div`
  min-width: 25%;
  text-align: center;

  .error {
    color: red;
    margin: 0;
  }

  .message {
    color: #65737f;
  }
`;

const YoutubeError = styled.img`
  padding: 1rem;
`;

const Error = () => {
  return (
    <ScreenSizer>
      <ErrorContainer>
        <YoutubeError src='/static/images/youtube404.png' alt='' />
        <h1 className='error'>404 Error</h1>
        <p className='message'>
          The page you are looking for doesn't exist o another error ocurred.
        </p>
      </ErrorContainer>
    </ScreenSizer>
  );
}

export default Error;
