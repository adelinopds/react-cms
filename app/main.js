import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Root from './root/Root';

const render = (Component) => {
	ReactDOM.render(
		<AppContainer>
			<Component/>
		</AppContainer>,
		document.getElementById('root'),
	);
};

render(Root);

if (module.hot) {
	module.hot.accept('./root/Root', () => {
		const newApp = require('./root/Root').default;
		render(newApp);
	});
}
