import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 	html {
	 box-sizing: border-box;
	 font-family: 'Roboto', sans-serif;
 	}
 	*, *:before, *:after {
	 box-sizing: inherit;
	}

	:root {
		/* COLORS */
		--white: #FFFFFF;
		--background-gray: #F9F9F9;
		--border-gray: #C6C6C6; 
		--input-gray: #F0F0F0;
		--icon-gray: #606060;
		--text-gray: #60626E;
		--youtube-red: #FF0000;
	}
`;
