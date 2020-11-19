import React from 'react';
import Navitems from '../../Navbar/Navitems/Navitems';
import classes from './Menu.module.scss';

const menu = (props) => (
	<div
		className={classes.menu}
		style={{ transform: props.isOpen ? 'translateX(0)' : 'translateX(100%)' }}
	>
		<Navitems link='/' active>
			Burger Builder
		</Navitems>
		<Navitems link='/'>Checkout</Navitems>
	</div>
);

export default menu;
