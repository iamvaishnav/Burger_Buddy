import React from 'react';
import classes from './ControlItems.module.scss';

const controlItems = (props) => {
	return (
		<div className={classes.item}>
			<div className={classes.Label}>{props.label}</div>
			<div className={classes.buttonContainer}>
				<button className={classes.Less} onClick={props.remove} disabled={props.disabled}>
					Less
				</button>
				<button className={classes.More} onClick={props.add}>
					More
				</button>
			</div>
		</div>
	);
};

export default controlItems;
