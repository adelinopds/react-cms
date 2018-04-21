/* eslint-disable */
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import 'bootstrap/dist/css/bootstrap.css';
import styled from 'styled-components';
import HRPage from '../components/hr/HRPage';
import HomePage from '../components/home/HomePage';
import Logo from '../components/Logo';
import '../assets/scss/main.scss';
import SubscriptionPage from '../components/subscription/SubscriptionPage';
import BlogPage from '../components/blog/BlogPage';
import ContactPage from '../components/contact/ContactPage';
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const store = configureStore();

const MainWrapper = styled.div.attrs({ className: 'main-wrapper' })``;
const PageWrapper = styled.div.attrs({ className: 'page-wrapper' })``;
const LinkWrapper = styled.div.attrs({className: 'menu-custom__menu-link'})``;

const Root = () => {
	return (
    <Provider store={store}>
      <Router>
        <MainWrapper id="js-main-wrapper">
          <Logo />
          <Menu
            right
            pageWrapId={'js-page-wrapper'}
            outerContainerId={'js-main-wrapper'}
            burgerButtonClassName={'menu-custom__burger-button'}
          >
            <LinkWrapper><Link to="/subscription">Subskrypcja</Link></LinkWrapper>
            <LinkWrapper><Link to="/contact">Kontakt</Link></LinkWrapper>
            <hr/>
            <LinkWrapper><Link to="/blog">Blog</Link></LinkWrapper>
            <LinkWrapper><Link to="/hr">Zatrudnij pracownika</Link></LinkWrapper>
          </Menu>
          <PageWrapper id="js-page-wrapper">
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/subscription" component={SubscriptionPage}/>
              <Route path="/hr" component={HRPage}/>
              <Route path="/blog" component={BlogPage}/>
              <Route path="/contact" component={ContactPage}/>
              <Redirect from='*' to='/'/>
            </Switch>
          </PageWrapper>
        </MainWrapper>
      </Router>
    </Provider>
	);
};

export default Root;

