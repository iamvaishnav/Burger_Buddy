import React from 'react';
import BurgerIngredients from './BurgerIngrediants/BurgerIngredients';
import classes from './Burger.module.scss';

const burger = (props) => {
	const igArr = Object.entries(props.ingredients);
	const newIgArr = [];
	igArr.forEach((curr) => {
		for (let i = 0; i < curr[1]; i++) {
			newIgArr.push(curr[0]);
		}
	});
	let burgerIg = newIgArr.map((curr, index) => {
		return <BurgerIngredients type={curr} key={index} />;
	});

	if (newIgArr.length === 0) {
		burgerIg = <h2>Please start adding ingredients! </h2>;
	}

	return (
		<div className={classes.Burger}>
			<BurgerIngredients type='bread-top' />
			{burgerIg}
			<BurgerIngredients type='bread-bottom' />
		</div>
	);
};

export default burger;
