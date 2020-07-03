import React, { Component } from 'react';
import Box from './Box';
import './BoxContainer.css';

class BoxContainer extends Component {
	static defaultProps = {
		numBoxes: 18,
	};

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
			<Box />
		));
		return (
			<div className='BoxContainer container text-center'>
				<h1>Color Flipper</h1>
				<div className='BoxContainer-boxes'>{boxes}</div>
			</div>
		);
	}
}

export default BoxContainer;
