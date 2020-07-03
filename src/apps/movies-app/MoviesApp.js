import React, { Component } from 'react';
import Movies from './components/movies';

class MoviesApp extends Component {
	constructor() {
		super();
		console.log('App- Constructor');
	}

	render() {
		return (
			<React.Fragment>
				<Movies />
			</React.Fragment>
		);
	}
}

export default MoviesApp;
