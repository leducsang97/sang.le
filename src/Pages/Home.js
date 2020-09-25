import React from 'react';
import profileImg from '../assets/pics/profilePic.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	titleContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center'
	},
	title: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignContent: 'center'
	}
}));

function About() {
	const classes = useStyles();
	return (
		<div>
			<img src={profileImg} alt="Italian Trulli" />
			<div className={classes.titleContainer}>
				<h1 className={classes.title}>Sang Le</h1>
				<p className={classes.title}>Software Engineer @ Dodles</p>
			</div>
		</div>
	);
}

export default About;
