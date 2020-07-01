import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRedirectNotAuth } from 'hooks/useRedirect';

import styled from 'styled-components';

const Home = () => {
	useRedirectNotAuth('/');

	const prueba =
		'Luis Miguel - &quot;Ahora te puedes marchar&quot; (Video Oficial)';

	console.log(prueba.replace('&quot;', '').replace('&quot;', ''));

	return <h1>home</h1>;
};

export default Home;
