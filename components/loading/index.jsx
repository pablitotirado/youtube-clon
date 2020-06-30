import React from 'react';
import { BarLoader } from 'react-spinners';
import styled from 'styled-components';

const Loader = ({ loading }) => {
	return <BarLoader width='100%' height='2px' color='red' loading={loading} />;
};

export default Loader;
