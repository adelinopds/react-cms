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

  render = () => {

    return (
      <Grid>
        <div className="card card-container">
          <img alt="test" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
          <p className="profile-name-card"/>
          <form className="form-signin">
            <span className="reauth-email">test</span>
            <input type="email" className="form-control" placeholder="Email address" required />
            <input type="password" className="form-control" placeholder="Password" required />
            <div className="checkbox">
              <label htmlFor="js-remember-me">
                <input id="js-remember-me" type="checkbox" value="remember-me"/> Remember me
              </label>


              <label htmlFor="js-login-checkbox" className="control control--checkbox js-contact-list__control-checkbox">
                <input id="js-login-checkbox" type="checkbox" onChange={() => {}}/>
                <div className="control__indicator"/>
                Remember me
              </label>


            </div>
            <Button color="primary" type="submit">Sign in</Button>
          </form>
          <a href="#" className="forgot-password">
            Forgot the password?
          </a>
        </div>

        <Row>
          <Col xs={12} md={12}>
            <div>Login</div>
            <div>{this.props.token}</div>
            <button
              onClick={() => {
                this.props.dispatch(loginUser('qweqeqwewqewq'));
              }}
            >
              Click Me
            </button>
            <Button color="danger">Danger!</Button>
          </Col>
        </Row>

      </Grid>
    );
  }
}
