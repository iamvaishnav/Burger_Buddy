import React from 'react';
import classes from './Navitems.module.scss';

const navItems = (props) => (
	<div className={[classes.item, props.active ? classes.active : null].join(' ')}>
		<a href={props.link}>{props.children}</a>
	</div>
);

export default navItems;
