import React from 'react';
import classes from './Navbar.module.scss';
import Navitems from './Navitems/Navitems';

const navBar = (props) => (
	<div className={classes.navbar}>
		<Navitems link='/' active>
			Burger Builder
		</Navitems>
		<Navitems link='/'>Checkout</Navitems>
	</div>
);

export default navBar;
