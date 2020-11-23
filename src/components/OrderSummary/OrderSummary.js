import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './OrderSummary.module.scss';
import cancel from '../../assets/icon-close.svg';
import Button from '../UI/Buttons/Buttons';

const OrderSummary = (props) => {
	const igSummary = Object.keys(props.ingredients).map((key) => {
		return (
			<span key={key}>
				{' '}
				{key} : {props.ingredients[key]}{' '}
			</span>
		);
	});

	return (
		<Aux>
			<div className={classes.header}>
				<h1>Your Order</h1>
				<img
					src={cancel}
					alt='close-icon'
					className={classes.close}
					onClick={props.cancelOrder}
				/>
			</div>
			<div className={classes.description}>
				A delicious burger with the following components
			</div>
			<div className={classes.ingredients}>{igSummary}</div>
			<div className={classes.price}>Price : ${props.price.toFixed(2)}</div>
			<div className={classes.question}>Continue to Checkouts?</div>
			<Button type='Danger' action={props.cancelOrder}>
				CANCEL
			</Button>
			<Button type='Success' action={props.proceedOrder}>
				CONTINUE
			</Button>
		</Aux>
	);
};

export default OrderSummary;
