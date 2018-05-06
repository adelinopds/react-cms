import React from 'react';
import { Auth, AuthPiece } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import isAuthorized from '../helpers/isAuthorized';
import { changePassword } from '../actions/userActions';

const SignUpContainer = styled.div``;

@connect((store) => {
  return {
    user: store.user.user,
    authError: store.user.authError,
  };
})
export default class ResetPassword extends AuthPiece {

  state = {
    oldPassword: '',
    newPassword: '',
    reNewPassword: '',
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

  resetPassword = () => {
    const { oldPassword, newPassword, reNewPassword } = this.state;
    const { dispatch } = this.props;

    // TODO: add validation and test solution - response from AWS
    if (newPassword === reNewPassword) {
      Auth.currentAuthenticatedUser().then((user) => {
        dispatch(changePassword(user, oldPassword, newPassword));
      }).catch(error => this.error(error));
    } else {
      // TODO: add error handler
      console.log('new password and re-pass must be same');
    }

  };

  render = () => {

    const authorized = isAuthorized();
    if (authorized) {
      return (<Redirect to="/"/>);
    }
    return (
      <SignUpContainer className="sign-up-wrapper">
        <Grid>
          <Row>
            <Col md={12} className="sign-up-container" style={{ height: this.state.screenHeight }}>

              <div className="sign-up-card">
                <h3 className="form-title">Reset Password</h3>
                <form className="register-form">

                  <input
                    name="old-password"
                    value={this.state.oldPassword}
                    type="password"
                    className="form-control"
                    placeholder="Old password"
                    onChange={(element) => {
                      this.setState({ oldPassword: element.target.value });
                    }}
                    required
                  />
                  <input
                    name="new-password"
                    value={this.state.newPassword}
                    type="password"
                    className="form-control"
                    placeholder="New password"
                    onChange={(element) => {
                      this.setState({ newPassword: element.target.value });
                    }}
                    required
                  />
                  <input
                    name="new-re-password"
                    value={this.state.reNewPassword}
                    type="password"
                    className="form-control"
                    placeholder="Repeat new password"
                    onChange={(element) => {
                      this.setState({ reNewPassword: element.target.value });
                    }}
                    required
                  />

                  <Button
                    type="submit"
                    className="cms-button"
                    onClick={() => this.signUp()}
                  >
                    Reset
                  </Button>

                </form>

              </div>

            </Col>
          </Row>
        </Grid>
      </SignUpContainer>
    );
  }
}
