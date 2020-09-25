import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import ContentRouter from './ContentRouter';

const useStyles = makeStyles(theme => ({
	root: {
		display: 'grid',
		height: '100%',
		width: '100%',
		gridTemplateColumns: '1fr 1fr 1fr',
		gridTemplateRows: 'auto auto auto',
		// alignItems: 'center',
		justifyItems: 'center'
	},
	content: {
		width: '100%',
		gridRow: ' 2 / 3',
		gridColumn: '2 / 3',
		display: 'flex',
		flexDirection: 'column'
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	button: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1)
	}
}));

const App = () => {
	const classes = useStyles();
	return (
		<Router>
			<div className={classes.root}>
				<div className={classes.content}>
					<div className={classes.nav}>
						<Link to="/home">
							<div classes={classes.button}>HOME</div>
						</Link>

						<Link to="/about">
							<div classes={classes.button}>ABOUT</div>
						</Link>
					</div>

					<ContentRouter />
				</div>
			</div>
		</Router>
	);
};

export default App;
