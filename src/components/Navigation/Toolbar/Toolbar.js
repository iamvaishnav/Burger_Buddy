import React from 'react';
import classes from './Toolbar.module.scss';
import Logo from '../../Logo/Logo';
import Navbar from '../../Navigation/Toolbar/Navbar/Navbar';
import BurgerIcon from './HamburgerMenu/BurgerIcon/Burger';
import Menu from './HamburgerMenu/Menu/Menu';

const toolbar = (props) => (
	<div className={classes.toolBar}>
		<Logo />
		<Navbar />
		<BurgerIcon isOpen={props.isOpen} toggle={props.toggleMenu} />
		<Menu isOpen={props.isOpen} />
	</div>
);

export default toolbar;
