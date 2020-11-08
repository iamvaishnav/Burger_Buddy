import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Burger from '../../../components/Burger/Burger';
import BurgerControls from '../../Burger/BurgerControls/BurgerControls';

const igPrices = {
	salad: 0.7,
	bacon: 0.5,
	cheese: 0.4,
	meat: 1.3,
};

class BurgerBuilder extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
		totalPrice: 4,
		purchasable: false,
	};

	updatePurchasable(ingredients) {
		let sumIg = 0;
		for (let key in ingredients) {
			sumIg += ingredients[key];
		}
		this.setState({
			purchasable: sumIg > 0,
		});
	}

	handleRemoveIngredients = (type) => {
		const oldCount = this.state.ingredients[type];
		if (oldCount >= 0) {
			const updateCount = oldCount - 1;
			const updatedIngredients = {
				...this.state.ingredients,
			};
			updatedIngredients[type] = updateCount;
			const priceDeletion = igPrices[type];

			const updatedPrice = this.state.totalPrice - priceDeletion;
			if (updatedPrice >= 4) {
				this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
			}
			this.updatePurchasable(updatedIngredients);
		}
	};

	handleAddIngredients = (type) => {
		const oldCount = this.state.ingredients[type];
		const updateCount = oldCount + 1;
		const updatedIngredients = {
			...this.state.ingredients,
		};
		updatedIngredients[type] = updateCount;
		const priceAddition = igPrices[type];
		const updatedPrice = priceAddition + this.state.totalPrice;
		this.setState({ ingredients: updatedIngredients, totalPrice: updatedPrice });
		this.updatePurchasable(updatedIngredients);
	};
	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}
		return (
			<Aux>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControls
					add={this.handleAddIngredients}
					remove={this.handleRemoveIngredients}
					disabled={disabledInfo}
					isPurchasable={this.state.purchasable}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default BurgerBuilder;
