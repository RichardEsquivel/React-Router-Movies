import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

//Wrapping App in Router in order to utilize Router component properties to route links between components and pass props as needed
ReactDOM.render(
	<Router>
		<App />
	</Router>, document.getElementById('root'));
