import React from 'react';
import Backdrop from '../Backdrop/Backdrop';
import classes from './Modal.module.scss';

const modal = (props) => {
	return (
		<Backdrop show={props.show} clicked={props.clicked}>
			<div
				className={classes.modal}
				style={{ transform: props.show ? 'translateY(0)' : 'translateY(-100vh)' }}
			>
				{props.children}
			</div>
		</Backdrop>
	);
};

export default React.memo(modal);
