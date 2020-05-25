import React from 'react';

// Stateless Functional Component
const NavBar = (props) => {
	const { totalCounters } = props;
	return (
		<nav className='navbar navbar-light bg-light'>
			<a href='https://google.com' className='navbar-brand'>
				Navbar
				<span className='badge badge-pill badge-secondary'>
					{totalCounters}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
