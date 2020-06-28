import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';

const Home = () => {
	const { search, loading } = useSelector((state) => state.search);
	useEffect(() => {
		!localStorage.getItem('access_token') && Router.push('/');
	}, []);
	console.log(search);
	return (
		<>
			<h1 style={{ margin: 0, padding: 0 }}>Home</h1>
			{!loading &&
				search.items &&
				search.items.map((item, i) => {
					console.log(item);
					return (
						<div key={`item.id.videoId_${i}`}>{item.snippet.title} &quot;</div>
					);
				})}
			{/* <iframe
				id='player'
				type='text/html'
				width='50%'
				height='50%'
				src='http://www.youtube.com/embed/AaLIvfR6Tw0?enablejsapi=1&origin=http://example.com'
				frameBorder='0'
			></iframe> */}
		</>
	);
};

export default Home;
