import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import { loginUser } from '../../actions/userAction';

@connect((state) => {
  return {
    token: state.login.userToken
  };
})
export default class Login extends React.Component {

  state = {
    screenHeight: 0
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.calculations);
    this.calculations();
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.calculations);
  };

  calculations = () => {
    const screenHeight = window.innerHeight;

    this.setState({
      screenHeight
    });
  };

  render = () => {

    return (
      <Grid>
        <Row>
          <Col md={12} className="login-container" style={{ height: this.state.screenHeight }}>
            <div className="login-card">
              <img alt="test" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
              <p className="profile-name-card"/>
              <form className="login-form">

                <input id="inputEmail" type="email" className="form-control" placeholder="Email address" required />
                <input id="inputPassword" type="password" className="form-control" placeholder="Password" required />

                <div className="checkbox">
                  <label htmlFor="js-login-checkbox" className="custom-control custom-control--checkbox js-contact-list__control-checkbox">
                    <input id="js-login-checkbox" type="checkbox" onChange={() => {}}/>
                    <div className="custom-control__indicator"/>
                    <span className="login-remember">Remember me</span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="custom-color"
                  onClick={() => {
                    this.props.dispatch(loginUser('qweqeqwewqewq'));
                  }}
                >
                  Sign in
                </Button>

              </form>

              <div className="forgot-password" onClick={() => {}}>
                Forgot the password?
              </div>
            </div>
          </Col>
        </Row>

      </Grid>
    );
  }
}
