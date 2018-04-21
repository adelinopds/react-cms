import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import phoneImage from '../../assets/images/samsung-galaxy.png';

const HomePageWrapper = styled.div.attrs({ className: 'home-page' })``;
const HomeScreen = styled.div``;
const InfoContainer = styled.div``;
const HomeScreenImage = styled.div``;

export default class HomePage extends React.Component {

  state = {
    screenHeight: 0,
    imageHeight: 0,
    imagePosition: 0,
    infoText: 0,
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
    const imageHeight = (80 * window.innerHeight) / 100;
    const imagePosition = screenHeight - imageHeight;
    const infoText = (screenHeight - imageHeight) / 4;

    this.setState({
      screenHeight,
      imageHeight,
      imagePosition,
      infoText
    });
  };

  render = () => {
    return (
      <HomePageWrapper>

        <HomeScreen
          className="home-page__background"
          style={{
            height: this.state.screenHeight
          }}
        >
          <Grid className="background-container">

            <Row>
              <Col md={6}>
                <HomeScreenImage className="background-container__screen">
                  <img
                    className="background-container__phone-image"
                    style={{
                      height: this.state.imageHeight,
                      width: 'auto',
                      position: 'absolute',
                      top: this.state.imagePosition
                    }}
                    src={phoneImage}
                    alt="aplikacja zbynio"
                  />
                </HomeScreenImage>
              </Col>
              <Col md={6}>
                <InfoContainer
                  className="background-container__info-container"
                  style={{
                    marginTop: this.state.infoText
                  }}
                >
                  <h1>Zbynio</h1>
                  <p>Zbynio to darmowe narzędzie <br/> na Twój telefon komórkowy.</p>
                  <p>Zbynio oszczędzi Twój czas, pomoże Tobie w trakcie i po zbiorach.</p>
                  <p>
                    <Link className="custom-button-link" to="/subscription">
                      <Button className="custom-button" bsSize="large">Zobacz jakie to proste</Button>
                    </Link>
                  </p>
                </InfoContainer>
              </Col>
            </Row>
          </Grid>
        </HomeScreen>

      </HomePageWrapper>
    );
  }
}
