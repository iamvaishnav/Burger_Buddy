import React from 'react';
import classes from './Backdrop.module.scss';

const backDrop = (props) => {
	return props.show ? (
		<div className={classes.overlay} onClick={props.clicked}>
			{props.children}
		</div>
	) : null;
};

export default backDrop;
