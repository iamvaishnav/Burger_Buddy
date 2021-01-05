import React, { Component } from 'react';
import classes from './ContactData.module.scss';
import Button from '../../UI/Buttons/Buttons';
import axios from '../../../axios-order';
import Spinner from '../../UI/Spinner/Spinner';
import { withRouter } from 'react-router-dom';

class ContactData extends Component {
	state = {
		order: {
			name: null,
			email: null,
			street: null,
			zip: null,
			country: 'usa',
			type: 'normal',
			price: this.props.price,
			ingredients: this.props.ingredients,
			date: new Date().toLocaleDateString(),
		},
		errors: {
			name: null,
			email: null,
			street: null,
			zip: null,
		},
		loading: false,
	};

	handleInput = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		this.setState((prevState) => {
			return {
				order: {
					...prevState.order,
					[name]: value,
				},
			};
		});
	};

	handlePlaceOrder = () => {
		this.setState({
			loading: true,
		});
		const order = this.state.order;
		console.log(order);
		axios
			.post('/orders.json', order)
			.then((res) => {
				this.setState({
					loading: false,
				});
				this.props.history.replace('/');
				console.log(res);
			})
			.catch((err) => {
				this.setState({
					loading: false,
				});
				this.props.history.replace('/');
				console.log(err);
			});
	};

	render() {
		let form = (
			<React.Fragment>
				<form>
					<div className={classes.fields}>
						<input
							type='text'
							value={this.state.order.name}
							placeholder='Your Name'
							name='name'
							onChange={this.handleInput}
						/>
					</div>
					<div className={classes.fields}>
						<input
							type='email'
							value={this.state.order.email}
							placeholder='Your Email'
							name='email'
							onChange={this.handleInput}
						/>
					</div>
					<div className={classes.fields}>
						<input
							type='text'
							value={this.state.order.street}
							placeholder='Street'
							name='street'
							onChange={this.handleInput}
						/>
					</div>
					<div className={classes.fields}>
						<input
							type='number'
							value={this.state.order.zip}
							placeholder='Zip Code / Postal Code'
							name='zip'
							onChange={this.handleInput}
						/>
					</div>
					<div className={[classes.selection, classes.first].join(' ')}>
						<label htmlFor='country'>
							<h3>Country</h3>
						</label>
						<select
							name='country'
							value={this.state.order.country}
							onChange={this.handleInput}
						>
							<option value='usa'>USA</option>
							<option value='uk'>UK</option>
							<option value='india'>India</option>
						</select>
					</div>
					<div className={[classes.selection, classes.second].join(' ')}>
						<label htmlFor='type'>
							<h3>Delivery Type</h3>
						</label>
						<select
							name='type'
							value={this.state.order.type}
							onChange={this.handleInput}
						>
							<option value='normal'>Normal</option>
							<option value='express'>Express</option>\
						</select>
					</div>
				</form>
				<div>
					<Button type='Success' action={this.handlePlaceOrder}>
						ORDER
					</Button>
				</div>
			</React.Fragment>
		);
		if (this.state.loading) {
			form = <Spinner />;
		}
		return (
			<div className={classes.wrapper}>
				<h1>Enter Contact Details</h1>
				{form}
			</div>
		);
	}
}

export default withRouter(ContactData);
