import React, { Component } from 'react';
import CheckoutSummary from '../../Order/ChechoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from '../../Order/ContactData/ContactData';

class Checkout extends Component {
	state = {
		ingredients: {
			salad: 0,
			bacon: 0,
			cheese: 0,
			meat: 0,
		},
	};

	componentDidMount() {
		const query = new URLSearchParams(this.props.location.search);
		const ingredients = {};
		let price = 0;
		for (let param of query.entries()) {
			if (param[0] === 'price') {
				price = Number(param[1]);
			} else {
				ingredients[param[0]] = Number(param[1]);
			}
		}
		this.setState({
			ingredients: ingredients,
			totalPrice: price,
		});
	}

	handleCheckoutCancel = () => {
		this.props.history.goBack();
	};

	handleCheckoutContinue = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		return (
			<React.Fragment>
				<CheckoutSummary
					ingredients={this.state.ingredients}
					checkoutCancel={this.handleCheckoutCancel}
					checkoutContinue={this.handleCheckoutContinue}
				/>
				<Route
					path={`${this.props.match.path}/contact-data`}
					render={() => (
						<ContactData
							ingredients={this.state.ingredients}
							price={this.state.totalPrice}
						/>
					)}
				/>
			</React.Fragment>
		);
	}
}

export default Checkout;
