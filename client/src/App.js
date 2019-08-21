import React, { useState } from 'react';
//importing Route from react-router-dom library and importing
//components of SaveList and MovieList and Movie from current directory with ./
import { Route } from 'react-router-dom';
import SavedList from './Movies/SavedList.js';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
	const [savedList, setSavedList] = useState([]);

	const addToSavedList = movie => {
		setSavedList([...savedList, movie]);
	};

	return (
		// Gave Route 'exact' path to movieList component so it is only displayed on the declared home page address of local host 3000/
		<div>
			<SavedList list={savedList} />
			<Route exact path="/" component={MovieList} />
			{/*Creating route that will set up route for the individual movies at /moves at an id : will have React Router parse out and giving component of Movie*/}
			<Route path="/movies/:id" component={Movie} />
		</div>
	);
};

export default App;
