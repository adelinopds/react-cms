/* eslint-disable */
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Routes from './Routes';

import 'bootstrap/dist/css/bootstrap.css';
import '../assets/scss/main.scss';
import App from '../components/App';

const store = configureStore();

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })``;
const PageWrapper = styled.div.attrs({ className: 'page-wrapper' })``;

const Root = () => {

	return (
    <Provider store={store}>
      <Router>
        <MainWrapper id="js-main-wrapper">
          <App />
          <PageWrapper id="js-page-wrapper">
            <Routes />
          </PageWrapper>
        </MainWrapper>
      </Router>
    </Provider>
	)
};

export default Root;

