/* eslint-disable */
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import Routes from './Routes';

import '../assets/scss/main.scss';

export const store = configureStore();

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })``;
const ViewWrapper = styled.div.attrs({ className: 'page-wrapper' })``;

const Root = () => {

	return (
    <Provider store={store}>
      <Router>
        <MainWrapper id="js-main-wrapper">
          <ViewWrapper id="js-page-wrapper">
            <Routes />
          </ViewWrapper>
        </MainWrapper>
      </Router>
    </Provider>
	)
};

export default Root;

