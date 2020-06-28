import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	InputStyled,
	ButtonSearch,
	IconSearch,
	BoxInputSearchStyled
} from './styles';

//Actions
import { setSearch } from 'actions/actions-search';

import ArrowLeft from 'components/arrow-left';

const InputSearch = ({ mobile, onClick = null }) => {
	const [term, setTerm] = useState('');
	const [token, setToken] = useState('');

	useEffect(() => {
		setToken(localStorage.getItem('access_token'));
	}, []);

	const dispatch = useDispatch();

	const getSearch = () => {
		term && dispatch(setSearch(term, token));
	};

	return (
		<>
			<BoxInputSearchStyled>
				<ArrowLeft mobile={mobile} onClick={() => onClick()} />
				<InputStyled
					placeholder='Buscar'
					value={term}
					onChange={(e) => setTerm(e.target.value)}
					onKeyPress={(e) => e.key === 'Enter' && getSearch()}
				/>
				<ButtonSearch onClick={() => getSearch()}>
					Buscar <IconSearch src='/static/images/buscar.svg' />
				</ButtonSearch>
			</BoxInputSearchStyled>
		</>
	);
};

export default InputSearch;
