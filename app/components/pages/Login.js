import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/userAction';

@connect((state) => {
  return {
    token: state.login.userToken
  };
})
export default class Login extends React.Component {
  render = () => {

    return (
      <div>
        <div>Login</div>
        <div>{this.props.token}</div>
        <button
          onClick={() => {
            this.props.dispatch(loginUser('qweqeqwewqewq'));
          }}
        >
          Click Me
        </button>
      </div>
    );
  }
}
