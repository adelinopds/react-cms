import React from 'react';
import { AuthPiece } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { Redirect, withRouter } from 'react-router-dom';
import isAuthorized from '../helpers/isAuthorized';
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
    screenHeight: 0,
    errorMessage: ''
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
            localStorage.setItem('user-token', 'jwt-token-should-be-save-in-database');
            this.props.history.push('/');
          },
          onFailure: (error) => {
            this.setState({ errorMessage: error.message });
          }
        });
      }

    } else {
      this.setState({ errorMessage: 'Values in both fields must be the same!' });
    }

  };

  render = () => {

    const authorized = isAuthorized();
    if (authorized) {
      return (<Redirect to="/"/>);
    }

    const { errorMessage } = this.state;
    return (

      <SignUpContainer className="reset-password-wrapper">
        <Grid>
          <Row>
            <Col md={12} className="reset-password-container" style={{ height: this.state.screenHeight }}>

              <div className="reset-password-card">
                <h3 className="form-title">Reset Password</h3>
                <form className="reset-password--form">

                  <span className="form-alert">{errorMessage}</span>
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

                  <p className="cms-notice">
                    Password has to contain equal or more than 8 chars,
                    must have uppercase and lowercase characters and numeric and symbol.
                  </p>

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
