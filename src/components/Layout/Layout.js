import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => {
	return (
		<Aux>
			<Toolbar />
			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

export default layout;
