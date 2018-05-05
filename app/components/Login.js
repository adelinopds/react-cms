import React from 'react';
import { Authenticator, Greetings, SignIn } from 'aws-amplify-react';
import LoginForm from './partials/LoginForm';

export default class Login extends React.Component {

  render = () => {
    return (
      <Authenticator hide={[Greetings, SignIn]}>
        <LoginForm />
      </Authenticator>
    );
  }
}
