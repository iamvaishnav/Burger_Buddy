import React from 'react';
import classes from './Buttons.module.scss';

const buttons = (props) => (
	<button className={[classes.Button, classes[props.type]].join(' ')} onClick={props.action}>
		{props.children}
	</button>
);

export default buttons;
