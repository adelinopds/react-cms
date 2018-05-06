import React from 'react';
import { Logger } from 'aws-amplify';
import { AuthPiece } from 'aws-amplify-react';
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
    email: '',
    password: '',
    errorMessage: '',
    screenHeight: 0
  };

  componentDidMount = () => {
    this.heightCalc();
    window.addEventListener('resize', this.heightCalc);
  };

  shouldComponentUpdate = (nextProps) => {

    if (nextProps.user.challengeName === STATUS.NEW_PASSWORD_REQUIRED) {
      this.props.history.push('/reset-password');
    }

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

  signIn = () => {
    this.setState({
      errorMessage: ''
    });

    const { email, password } = this.state;
    logger.debug(`username: ${email}`);
    try {
      loginValidator(email, password);
      this.props.dispatch(loginUser({
        email,
        password
      }));
    } catch (error) {
      this.setState({
        errorMessage: `${error.type} ${error.message}`
      });
    }
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
                      email: event.target.value
                    });
                  }}
                  value={this.state.email}
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
