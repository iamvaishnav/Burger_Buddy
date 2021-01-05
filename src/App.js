import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './components/Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './components/Containers/Checkout/Checkout';
import OrdersData from './components/Containers/OrdersData/OrdersData';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Switch>
						<Route path='/checkout' component={Checkout} />
						<Route path='/' exact component={BurgerBuilder} />
						<Route path='/my-orders' exact component={OrdersData} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default App;
