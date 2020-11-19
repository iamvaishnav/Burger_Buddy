import React, { Component } from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

class Layout extends Component {
	state = {
		isOpen: false,
	};

	handleBurgerMenu = () => {
		this.setState((prevState) => {
			return { isOpen: !prevState.isOpen };
		});
	};

	render() {
		return (
			<Aux>
				<Toolbar isOpen={this.state.isOpen} toggleMenu={this.handleBurgerMenu} />
				<main className={classes.Content}>{this.props.children}</main>
			</Aux>
		);
	}
}

export default Layout;
