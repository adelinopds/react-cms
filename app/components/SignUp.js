import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userActions';
import isAuthorized from '../helpers/isAuthorized';

const SignUpContiner = styled.div``;

export default class SignUp extends React.Component {

  state = {
    screenHeight: 0
  };

  componentDidMount = () => {
    this.calculations();
    window.addEventListener('resize', this.calculations);
  };

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.calculations);
  };

  calculations = () => {
    const screenHeight = window.innerHeight;
    this.setState({ screenHeight });
  };

  signUp = () => {

  };

  render = () => {

    const authorized = isAuthorized();
    if (authorized) {
      return (<Redirect to="/"/>);
    }
    return (
      <SignUpContiner className="sign-up-wrapper">
        <Grid>
          <Row>
            <Col md={12} className="sign-up-container" style={{ height: this.state.screenHeight }}>

              <div className="sign-up-card">
                <form className="register-form">

                  <input id="register-email" type="email" className="form-control" placeholder="Email address" required/>
                  <input id="register-password" type="password" className="form-control" placeholder="Password" required/>
                  <input id="register-re-password" type="password" className="form-control" placeholder="Repeat password" required/>

                  <Button
                    type="submit"
                    className="cms-button"
                    onClick={() => this.signUp()}
                  >
                    Sign up
                  </Button>

                  <hr/>

                  <div className="sign-in">
                    <Link to="/login">
                      <Button className="cms-button">
                        Sign in
                      </Button>
                    </Link>
                  </div>

                </form>

              </div>

            </Col>
          </Row>
        </Grid>
      </SignUpContiner>
    );
  }
}
