import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Burger from '../../../components/Burger/Burger';
import BurgerControls from '../../Burger/BurgerControls/BurgerControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../OrderSummary/OrderSummary';
import axios from '../../../axios-order';
import Spinner from '../../UI/Spinner/Spinner';
import ErrorHandler from '../../../hoc/errorhandler';

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
		ordered: false,
		loading: false,
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

	handleOrdering = () => {
		this.setState({
			ordered: true,
		});
	};

	handleCancelOrder = () => {
		this.setState({
			ordered: false,
		});
	};

	handleOrderContinue = () => {
		this.setState({
			loading: true,
		});

		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Lex Luthor',
				address: {
					street: 'Joker Street',
					ZipCode: '37644',
					country: 'USA',
				},
			},
			deliveryType: 'express',
		};

		axios
			.post('/orders.json', order)
			.then((resolve) => {
				console.log(resolve);
				this.setState({
					loading: false,
					ordered: false,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					loading: false,
					ordered: false,
				});
			});
	};

	render() {
		const disabledInfo = {
			...this.state.ingredients,
		};

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let orderSummary = (
			<OrderSummary
				ingredients={this.state.ingredients}
				cancelOrder={this.handleCancelOrder}
				proceedOrder={this.handleOrderContinue}
				price={this.state.totalPrice}
			/>
		);

		if (this.state.loading) {
			orderSummary = <Spinner />;
		}

		return (
			<Aux>
				<Modal show={this.state.ordered} cancelOrder={this.handleCancelOrder}>
					{orderSummary}
				</Modal>
				<Burger ingredients={this.state.ingredients} />
				<BurgerControls
					add={this.handleAddIngredients}
					remove={this.handleRemoveIngredients}
					disabled={disabledInfo}
					isPurchasable={this.state.purchasable}
					isOrdered={this.handleOrdering}
					price={this.state.totalPrice}
				/>
			</Aux>
		);
	}
}

export default ErrorHandler(BurgerBuilder, axios);
