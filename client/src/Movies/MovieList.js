import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Link to link two components of application
import { Link } from 'react-router-dom';

//Getting data from server api with axios.get
const MovieList = (props) => {
	const [movies, setMovies] = useState([])
	useEffect(() => {
		const getMovies = () => {
			axios
				.get('http://localhost:5000/api/movies')
				.then(response => {
					setMovies(response.data);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		}

		getMovies();
	}, []);

	//Mapping over movies to create move detail components
	return (
		<div className="movie-list">
			{movies.map(movie => (
				<MovieDetails key={movie.id} movie={movie} />
			))}
		</div>
	);
}

function MovieDetails({ movie }) {
	const { title, director, metascore, stars } = movie;
	return (
		//Link that grabs id value that we are receiving from movie as props and 
		//wrap template string ` ` in { } as they are javascript
		<Link to={`/movies/${movie.id}`}>
			<div className="movie-card">
				<h2>{title}</h2>
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
		</Link>
	);
}

export default MovieList;
