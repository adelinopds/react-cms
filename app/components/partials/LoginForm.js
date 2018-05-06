import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../../actions/userActions';
import isAuthorized from '../../helpers/isAuthorized';
import loginValidator from './../validators/loginValidator';
import config from '../../config';
import fakeAuthorization from '../../helpers/fakeAuthorization';

@connect((store) => {
  return {
    user: store.user.user,
    authError: store.user.authError,
  };
})
export default class LoginForm extends React.Component {

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

  shouldComponentUpdate = (nextProps, nextStates) => {
    // TODO: Demo log in
    if (config.DEMO) {
      fakeAuthorization(this.state.email, this.state.password);
    }

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
