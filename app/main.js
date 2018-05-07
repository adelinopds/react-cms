import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { AppContainer } from 'react-hot-loader';
import Root from './root/Root';

Amplify.configure({
	Auth: {
		identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
		region: process.env.AWS_REGION,
		userPoolId: process.env.COGNITO_USER_POOL_ID,
		userPoolWebClientId: process.env.COGNITO_USER_POOL_CLIENT_ID,
	}
});


console.log(process.env.DB_HOST, 'process.env.DB_HOSTyarn start');

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
