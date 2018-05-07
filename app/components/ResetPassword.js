import React from 'react';
import { Auth } from 'aws-amplify';
import { AuthPiece } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { Link, Redirect, withRouter } from 'react-router-dom';
import isAuthorized from '../helpers/isAuthorized';
import { changePassword } from '../actions/userActions';
import { STATUS } from '../constants/userConstants';

const SignUpContainer = styled.div``;

@connect((store) => {
  return {
    user: store.user.user,
    authError: store.user.authError,
  };
})
@withRouter
export default class ResetPassword extends AuthPiece {

  state = {
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
    const { newPassword, reNewPassword } = this.state;
    const { user } = this.props;

    if (newPassword === reNewPassword) {

      // Execute only if ne password required
      if (user.challengeName === STATUS.NEW_PASSWORD_REQUIRED) {
        const { userAttributes } = user.challengeParam;
        delete userAttributes.email_verified;

        user.completeNewPasswordChallenge(newPassword, userAttributes, {
          onSuccess: () => {
            // TODO: Add alert thar password was created
            localStorage.setItem('user-token', 'something'); // TODO: remove temporary and check if JWT is set
            this.props.history.push('/');
          },
          onFailure: err => console.log(err)
        });
      }

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
                    className="cms-button"
                    onClick={() => this.resetPassword()}
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
