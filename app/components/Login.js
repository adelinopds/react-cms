import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userAction';
import isAuthorized from '../helpers/isAuthorized';
import loginValidator from './validators/loginValidator';

@connect((store) => {
  return {
    user: store.user.user,
    authError: store.user.authError,
  };
})
export default class Login extends React.Component {

  state = {
    remember: true,
    email: '',
    password: '',
    alerts: {
      email: false,
      password: false,
    },
    screenHeight: 0
  };

  componentDidMount = () => {
    this.heightCalc();
    window.addEventListener('resize', this.heightCalc);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.heightCalc);
  };

  heightCalc = () => {
    const screenHeight = window.innerHeight;
    this.setState({ screenHeight });
  };

  signIn = () => {

    const valid = loginValidator(this.state.email, this.state.password, this.props.authError);
    if (valid) {
      const { email, password } = valid;
      this.setState({
        alerts: {
          email,
          password
        }
      });
    } else {
      const { email, password } = this.state;
      this.props.dispatch(loginUser({
        email,
        password
      }));
    }
  };

  render = () => {
    const { alerts } = this.state;

    const authorized = isAuthorized();
    if (authorized) {
      return (<Redirect to="/"/>);
    }
    return (
      <Grid>
        <Row>
          <Col md={12} className="login-container" style={{ height: this.state.screenHeight }}>
            <div className="login-card">
              <img alt="test" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
              <p className="profile-name-card"/>
              <form className="login-form">

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
                <span className="form-alert">{alerts.email}</span>

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
                <span className="form-alert">{alerts.password}</span>

                <div className="checkbox">
                  <label
                    htmlFor="js-login-checkbox"
                    className="custom-control custom-control--checkbox js-contact-list__control-checkbox"
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

              <div className="sign-up">
                <Link to="/sign-up">
                  <Button
                    type="submit"
                    className="cms-button"
                  >
                    Sign up
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

      </Grid>
    );
  }
}
