import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { loginUser } from '../actions/userAction';

const SignUpContiner = styled.div``;

export default class SignUp extends React.Component {
  render = () => {
    return (
      <SignUpContiner className="sign-up-wrapper">
        <Grid>
          <Row>
            <Col md={12} className="sign-up-container">
              test
            </Col>
          </Row>
        </Grid>
      </SignUpContiner>
    );
  }
}
