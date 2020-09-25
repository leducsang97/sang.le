import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from './Pages';

const ContentRouter = () => {
	return (
		<Switch>
			<Route path="/" component={Pages.Home} />
			<Route path="/home" component={Pages.Home} />
			<Route path="/about" component={Pages.About} />
		</Switch>
	);
};

export default ContentRouter;
