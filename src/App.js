import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import ContentRouter from './ContentRouter';
import Footer from './Pages/Footer';

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
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		position: 'fixed',
		top: 0,
		right: 0
	},
	button: {
		...theme.typography.button,
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(1),
		display: 'flex'
	},
	footer: {
		display: 'flex',
		width: '100%',
		justifyContent: 'center',
		position: 'fixed',
		bottom: 0,
		right: 0
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
							<Button classes={{ root: classes.button }}>HOME</Button>
						</Link>
						<Link to="/about">
							<Button classes={{ root: classes.button }}>ABOUT</Button>
						</Link>
					</div>

					<ContentRouter />
					<div className={classes.footer}>
						<Footer />
					</div>
				</div>
			</div>
		</Router>
	);
};

export default App;
