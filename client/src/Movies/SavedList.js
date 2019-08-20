import React from 'react';
//Importing Link from React-router-dom in order to create a link
//that will take the HomeButton Icon navigate back to the home page
import { Link } from 'react-router-dom';

const SavedList = props => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map(movie => (
			<span className="saved-movie">{movie.title}</span>
		))}
		<Link exact to="/" className="home-button">Home</Link>
	</div>
);

export default SavedList;
