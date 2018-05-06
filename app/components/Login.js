import React from 'react';
import { Auth, Logger } from 'aws-amplify';
import { AuthPiece } from 'aws-amplify-react';
import AWS from 'aws-sdk';
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails
} from 'amazon-cognito-identity-js';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Redirect, withRouter } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import isAuthorized from '../helpers/isAuthorized';
import loginValidator from './validators/loginValidator';
import { STATUS } from '../constants/userConstants';


const logger = new Logger('LoginForm');

@connect((store) => {
  return {
    user: store.user.user,
    authError: store.user.authError,
  };
})
@withRouter
export default class LoginForm extends AuthPiece {

  state = {
    remember: true,
    username: '',
    password: '',
    errorMessage: '',
    screenHeight: 0
  };

  componentDidMount = () => {
    this.heightCalc();
    window.addEventListener('resize', this.heightCalc);
  };

  shouldComponentUpdate = (nextProps) => {

    console.log(AWS, 'OATHU');

    // respondToAuthChallenge

    if (nextProps.user.challengeName === STATUS.NEW_PASSWORD_REQUIRED) {

      Auth.forgotPassword(this.state.username)
        .then(data => console.log(data))
        .catch(err => console.log(err));
      // this.props.history.push('/reset-password');
    } else {
      // localStorage.setItem('user-token', 'something');
      // this.props.history.push('/');
    }

    // TODO : redirect to "ForgotPassword" !!!! FLOW

    // TODO: check what happend after log in and reset password,
    // TODO: perhaps need to set localStorage.set ('user-token)

    if (nextProps.authError !== this.props.authError) {
      this.setState({
        errorMessage: `(API) ${nextProps.authError}`
      });
    }
    return true;
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.heightCalc);
  };

  heightCalc = () => {
    const screenHeight = window.innerHeight;
    this.setState({ screenHeight });
  };

  getUSerTest = () => {
    Auth.currentAuthenticatedUser().then((user) => {
      console.log(user, 'USER');
    }).catch(error => console.log(error, 'error'));
  };

  signIn = () => {
    this.setState({
      errorMessage: ''
    });

    const { username, password } = this.state;
    logger.debug(`username: ${username}`);
    try {
      loginValidator(username, password);
      this.props.dispatch(loginUser(username, password));
    } catch (error) {
      this.setState({
        errorMessage: `${error.type} ${error.message}`
      });
    }
  };

  signIn2 = () => {
    const authenticationData = {
      Username: 'admin@admin.com',
      Password: 'dC_73^%2',
    };
    const authenticationDetails =
      new AuthenticationDetails(authenticationData);

    const poolData = {
        UserPoolId: process.env.COGNITO_USER_POOL_ID,
        ClientId: process.env.COGNITO_USER_POOL_CLIENT_ID
      };
    const userPool = new CognitoUserPool(poolData);
    const userData = {
      Username: 'admin@admin.com',
      Pool: userPool
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result) => {
        console.log(`access token ${result.getAccessToken().getJwtToken()}`);
        console.log(`idToken ${result.idToken.jwtToken}`);
      },

      onFailure: (err) => {
        console.log(err);
      },

      newPasswordRequired: (userAttributes) => {

        console.log(userAttributes, 'userAttributes');
        delete userAttributes.email_verified;
        cognitoUser.completeNewPasswordChallenge('dC_73^%2X', userAttributes, this);
      }

    });
  };

  render = () => {
    const { errorMessage } = this.state;

    const authorized = isAuthorized();
    if (authorized) {
      return (<Redirect to="/"/>);
    }
    return (
      <Grid>
        <Row>
          <Col md={12} className="login-container" style={{ height: this.state.screenHeight }}>
            <div className="login-card">
              <h3 className="form-title">Sign in</h3>
              <form className="login-form">

                <span className="form-alert">{errorMessage}</span>
                <input
                  onChange={(event) => {
                    this.setState({
                      username: event.target.value
                    });
                  }}
                  value={this.state.username}
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email address"
                />

                <input
                  onChange={(event) => {
                    this.setState({
                      password: event.target.value
                    });
                  }}
                  value={this.state.password}
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                />

                <div className="checkbox">
                  <label
                    htmlFor="js-login-checkbox"
                    className="custom-control custom-control--checkbox"
                  >
                    <input
                      id="js-login-checkbox"
                      type="checkbox"
                      onChange={() => {
                        this.setState({
                          remember: !this.state.remember
                        });
                      }}
                      checked={this.state.remember ? 'checked' : ''}
                    />
                    <div className="custom-control__indicator"/>
                    <span className="login-remember">Remember me</span>
                  </label>
                </div>

                <Button
                  className="cms-button"
                  onClick={() => this.signIn()}
                >
                  Sign in
                </Button>

                <Button
                  className="cms-button"
                  onClick={() => this.signIn2()}
                >
                  Sign in first
                </Button>

                <Button
                  className="cms-button"
                  onClick={() => this.getUSerTest()}
                >
                  get user
                </Button>

              </form>

              <div
                className="forgot-password"
                onClick={() => {}}>
                Forgot the password?
              </div>

            </div>
          </Col>
        </Row>

      </Grid>
    );
  }
}
