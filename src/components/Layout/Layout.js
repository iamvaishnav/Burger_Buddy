import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classes from './Layout.module.css';

const layout = (props) => {
	return (
		<Aux>
			<div>Hello There!</div>

			<main className={classes.Content}>{props.children}</main>
		</Aux>
	);
};

export default layout;