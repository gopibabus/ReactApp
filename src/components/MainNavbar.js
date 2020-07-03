import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNavbar extends Component {
	render() {
		return (
			<nav className='navbar navbar-expand-sm navbar-dark bg-dark mb-4'>
				<div className='container'>
					<Link className='navbar-brand' to='/'>
						React Apps
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarNav'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav ml-auto'>
							<li className='nav-item'>
								<Link className='nav-link' to='/counter'>
									Counter
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/movies'>
									Movies
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/hangman'>
									Hangman
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/pokegame'>
									Pokegame
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/colorbox'>
									ColorBox
								</Link>
							</li>
							<li className='nav-item'>
								<Link className='nav-link' to='/coin-flipper'>
									Coin Flipper
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default MainNavbar;
