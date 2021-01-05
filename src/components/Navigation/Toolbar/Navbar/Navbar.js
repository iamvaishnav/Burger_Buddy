import React from 'react';
import classes from './Navbar.module.scss';
import Navitems from './Navitems/Navitems';

const navBar = (props) => (
	<div className={classes.navbar}>
		<Navitems link='/' exact>
			Burger Builder
		</Navitems>
		<Navitems link='/my-orders'>My Orders</Navitems>
	</div>
);

export default navBar;
