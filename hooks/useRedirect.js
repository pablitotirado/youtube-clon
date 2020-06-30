import React, { useEffect } from 'react';
import Router from 'next/router';

export const useRedirectNotAuth = (url) => {
	useEffect(() => {
		!localStorage.getItem('access_token') && Router.push(url);
	}, []);
};
