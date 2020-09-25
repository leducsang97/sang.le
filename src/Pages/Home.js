import React from 'react';
import profileImg from '../assets/pics/profilePic.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	title: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignContent: 'center'
	}
}));

function About() {
	const classes = useStyles();
	return (
		<div>
			<img src={profileImg} alt="Italian Trulli" height={300} />
			<div className={classes.title}>
				<h1>Sang Le</h1>
				<p>Software Engineer @ Dodles</p>
			</div>
		</div>
	);
}

export default About;
