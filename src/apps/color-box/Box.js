import React, { Component } from 'react';
import './Box.css';
import { choice } from '../../demos/Helpers';

class Box extends Component {
	static defaultProps = {
		allColors: [
			'Yellow',
			'Blue',
			'Red',
			'Green',
			'Black',
			'Brown',
			'Azure',
			'Ivory',
			'Teal',
			'Silver',
			'Purple',
			'Navy blue',
			'Pea green',
			'Gray',
			'Orange',
			'Maroon',
			'Charcoal',
			'Aquamarine',
			'Coral',
			'Fuchsia',
			'Wheat',
			'Lime',
			'Crimson',
			'Khaki',
			'Hot pink',
			'Magenta',
			'Olden',
			'Plum',
			'Olive',
			'Cyan',
		],
	};

	constructor(props) {
		super(props);
		this.state = {
			color: choice(this.props.allColors),
		};
		this.handleClick = this.handleClick.bind(this);
	}

	pickColor() {
		let newColor;
		do {
			newColor = choice(this.props.allColors);
		} while (newColor === this.state.color);

		this.setState({
			color: newColor,
		});
	}

	handleClick() {
		this.pickColor();
	}

	render() {
		return (
			<div
				className='Box'
				style={{ backgroundColor: this.state.color }}
				onClick={this.handleClick}
			></div>
		);
	}
}

export default Box;
