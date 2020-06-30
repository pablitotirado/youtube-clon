import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRedirectNotAuth } from 'hooks/useRedirect';

import styled from 'styled-components';

const Home = () => {
	useRedirectNotAuth('/');
	return <h1>home</h1>;
};

export default Home;
