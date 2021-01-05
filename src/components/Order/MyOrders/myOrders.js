import React from 'react';
import classes from './myOrders.module.scss';

const myOrders = (props) => (
	<div className={classes.order}>
		<span>{props.date}</span>
		<span>{props.type}</span>
		<span>${props.price.toFixed(2)} </span>
	</div>
);

export default myOrders;
