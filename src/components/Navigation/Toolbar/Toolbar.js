import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import Navbar from '../../Navigation/Toolbar/Navbar/Navbar';
import BurgerIcon from './HamburgerMenu/BurgerIcon/Burger';

const toolbar = (props) => (
	<div className={classes.toolBar}>
		<Logo />
		<Navbar />
		<BurgerIcon />
	</div>
);

export default toolbar;
