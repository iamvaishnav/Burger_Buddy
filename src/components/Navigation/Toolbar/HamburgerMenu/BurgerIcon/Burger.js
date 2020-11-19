import React from 'react';
import classes from './Burger.module.scss';

const burger = (props) => (
	<div className={classes.burger} onClick={props.toggle}>
		<div style={{ transform: props.isOpen ? 'rotate(45deg)' : 'rotate(0)' }}></div>
		<div
			style={{
				opacity: props.isOpen ? '0' : '1',
				transform: props.isOpen ? 'translateX(20px)' : 'translateX(0)',
			}}
		></div>
		<div style={{ transform: props.isOpen ? 'rotate(-45deg)' : 'rotate(0)' }}></div>
	</div>
);

export default burger;
