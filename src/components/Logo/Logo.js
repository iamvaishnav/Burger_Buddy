import React from 'react';
import burgerLogo from '../../assets/burger-logo.png';
import classes from './Logo.module.scss';

const logo = () => (
	<div className={classes.logo}>
		<img src={burgerLogo} alt='burger buddy' />
	</div>
);

export default logo;
