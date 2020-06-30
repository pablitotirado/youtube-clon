import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRedirectNotAuth } from 'hooks/useRedirect';
import CardVideo from 'components/card-video';
import CardChannel from 'components/card-channel';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 0.1rem 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	grid-template-rows: repeat(auto-fill, minmax(20rem, 25rem));
	column-gap: 1rem;
	row-gap: 1rem;
`;

const Search = () => {
	const { search, loading } = useSelector((state) => state.search);

	useRedirectNotAuth('/');
	return (
		<Wrapper>
			{search.items &&
				search.items.map((item, i) => {
					// console.log(item.id.kind.includes('channel'));
					if (item.id.kind.includes('youtube#video')) {
						return (
							<CardVideo
								id={item.id.videoId}
								key={item.etag}
								title={item.snippet.title}
								description={item.snippet.description}
								img={item.snippet.thumbnails.high.url}
							/>
						);
					}
					if (item.id.kind.includes('youtube#channel')) {
						console.log(item);
						return (
							<CardChannel
								key={item.etag}
								img={item.snippet.thumbnails.high.url}
								title={item.snippet.title}
								description={item.snippet.description}
							/>
						);
					}
				})}
		</Wrapper>
	);
};

export default Search;
