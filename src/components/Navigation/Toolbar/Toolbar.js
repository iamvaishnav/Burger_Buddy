import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import Navbar from '../../Navigation/Toolbar/Navbar/Navbar';

const toolbar = (props) => (
	<div className={classes.toolBar}>
		<Logo />
		<Navbar />
	</div>
);

export default toolbar;
