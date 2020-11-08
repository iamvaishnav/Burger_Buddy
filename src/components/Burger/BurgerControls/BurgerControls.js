import React from 'react';
import ControlItems from './ControlItems/ControlItems';
import classes from './BurgerControls.module.scss';

const items = [
	{ label: 'Salad', type: 'salad' },
	{ label: 'Bacon', type: 'bacon' },
	{ label: 'Cheese', type: 'cheese' },
	{ label: 'Meat', type: 'meat' },
];

const burgerControls = (props) => {
	return (
		<div className={classes.buildContainer}>
			<p className={classes.price}>
				Current Price : <strong>$ {props.price.toFixed(2)}</strong>
			</p>
			{items.map((curr) => {
				return (
					<ControlItems
						label={curr.label}
						key={curr.label}
						add={() => props.add(curr.type)}
						remove={() => props.remove(curr.type)}
						disabled={props.disabled[curr.type]}
					/>
				);
			})}
			<button disabled={!props.isPurchasable} className={classes.OrderButton}>
				ORDER NOW
			</button>
		</div>
	);
};

export default burgerControls;
