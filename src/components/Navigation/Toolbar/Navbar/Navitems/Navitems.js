import React from 'react';
import classes from './Navitems.module.scss';
import { NavLink } from 'react-router-dom';

const navItems = (props) => (
	<div className={classes.item}>
		<NavLink to={props.link} activeClassName={classes.active} exact={props.exact}>
			{props.children}
		</NavLink>
	</div>
);

export default navItems;
