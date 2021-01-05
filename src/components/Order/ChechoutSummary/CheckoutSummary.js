import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Buttons/Buttons';
import classes from './CheckoutSummary.module.scss';

const checkoutSummary = (props) => (
	<div className={classes.summary}>
		<h1 className={classes.title}>We hope it tastes well!</h1>
		<Burger ingredients={props.ingredients} />
		<div>
			<Button type='Danger' action={props.checkoutCancel}>
				CANCEL
			</Button>
			<Button type='Success' action={props.checkoutContinue}>
				CONTINUE
			</Button>
		</div>
	</div>
);

export default checkoutSummary;
