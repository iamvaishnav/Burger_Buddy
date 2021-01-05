import React, { Component } from 'react';
import classes from './OrdersData.module.scss';
import MyOrders from '../../Order/MyOrders/myOrders';
import axios from '../../../axios-order';
import Spinner from '../../UI/Spinner/Spinner';
import errorhandler from '../../../hoc/errorhandler';

class OrdersData extends Component {
	state = {
		orders: [],
		loading: true,
	};

	componentDidMount() {
		axios
			.get('/orders.json')
			.then((res) => {
				const fetchOrders = [];
				for (let key in res.data) {
					fetchOrders.push({
						...res.data[key],
						id: key,
					});
				}
				this.setState({
					loading: false,
					orders: fetchOrders,
				});
			})
			.catch((err) => this.setState({ loading: false }));
	}

	render() {
		let orders = this.state.orders.map((order) => {
			return (
				<MyOrders
					date={order.date}
					price={order.price}
					type={order.deliveryType}
					key={order.id}
				/>
			);
		});
		if (this.state.loading) {
			orders = (
				<div style={{ margin: '20px auto' }}>
					<Spinner />
				</div>
			);
		}
		return (
			<div className={classes.ordersList}>
				<div className={classes.header}>
					<span>Order Date</span>
					<span>Deliver Type</span>
					<span>Total</span>
				</div>
				{orders}
			</div>
		);
	}
}

export default errorhandler(OrdersData, axios);
