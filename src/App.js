import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './Home';
import MainNavbar from './components/MainNavbar';
import CounterApp from './apps/counter-app/CounterApp';
import MoviesApp from './apps/movies-app/MoviesApp';
import Hangman from './apps/hangman/Hangman';
import Pokegame from './apps/pokegame/Pokegame';
import ColorBox from './apps/color-box/BoxContainer';
import CoinFlipper from './apps/coin-flipper/CoinContainer';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='App'>
					<MainNavbar />
					<div className='container'>
						<Route path='/' exact={true} component={Home} />
						<Route path='/counter' exact={true} component={CounterApp} />
						<Route path='/movies' exact={true} component={MoviesApp} />
						<Route path='/hangman' exact={true} component={Hangman} />
						<Route path='/pokegame' exact={true} component={Pokegame} />
						<Route path='/colorbox' exact={true} component={ColorBox} />
						<Route path='/coin-flipper' exact={true} component={CoinFlipper} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
