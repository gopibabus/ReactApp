import React, { Component } from 'react';
import Counters from './components/counters';
import NavBar from './components/navbar';

class CounterApp extends Component {
	constructor() {
		super();
		console.log('App- Constructor');
	}

	componentDidMount() {
		console.log('App - componentDidMount');
	}

	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 },
		],
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters: counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters: counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters: counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((c) => {
			return c.id !== counterId;
		});
		this.setState({ counters: counters });
	};
	render() {
		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter((c) => {
							return c.value > 0;
						}).length
					}
				/>
				<main className='container'>
					<Counters
						counters={this.state.counters}
						onReset={this.handleReset}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default CounterApp;
