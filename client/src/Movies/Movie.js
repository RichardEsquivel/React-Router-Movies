import React, { useState, useEffect } from 'react';
import axios from 'axios';
//Testing Link to determine navigation functions correctly
import { Link } from 'react-router-dom';

//Setting value of movie from the API server 5000 in axios.get setMovie will not have a value set till axios.get response returns, 

const Movie = (props) => {
	const [movie, setMovie] = useState(null);
	//rendering this component with a Route in App.js. Console log shows object with props of history, location and match. Route provides these props
	console.log('Movie', props, props.match.params.id);
	//We can now set id to prop.match.params.id and it will get the appropriate value from our api, declaring globally so we can access this variable declared in our useEffect dependency array
	const id = props.match.params.id;

	useEffect(() => {
		//We can now set id to prop.match.params.id and it will get the appropriate value from our api

		// You will NEED to add a dependency array to this effect hook

		axios
			.get(`http://localhost:5000/api/movies/${id}`)
			.then(response => {
				setMovie(response.data);
			})
			.catch(error => {
				console.error(error);
			});
		//Dependency array the callback in our useEffect depends on certain values, useEffect will check to see if any of these values have changed since the prior run	and if so it will rerun again to update. We will add the id which represents when props.match.params.id changes. TLDR id is the variable that changes so it should be placed in the dependency array so it will rerun the useEffect callback of axios.get.
	}, [id]);

	// Uncomment this only when you have moved on to the stretch goals
	// const saveMovie = () => {
	//   const addToSavedList = props.addToSavedList;
	//   addToSavedList(movie)
	// }

	if (!movie) {
		return <div>Loading movie information...</div>;
	}
	//Destructing to get values out of movie object
	const { title, director, metascore, stars } = movie;
	return (
		<div className="save-wrapper">
			<div className="movie-card">
				<h2>{title}</h2>
				<Link to="/movies/4">Other Movie!!!</Link>
				<div className="movie-director">
					Director: <em>{director}</em>
				</div>
				<div className="movie-metascore">
					Metascore: <strong>{metascore}</strong>
				</div>
				<h3>Actors</h3>

				{stars.map(star => (
					<div key={star} className="movie-star">
						{star}
					</div>
				))}
			</div>
			<div className="save-button">Save</div>
		</div>
	);
}

export default Movie;
