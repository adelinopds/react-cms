import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Logo from './Logo';

const LinkWrapper = styled.div.attrs({ className: 'menu-custom__menu-link' })``;


export default class App extends React.Component {

  render = () => {
    return (
      <div>
        <Logo id="logo"/>
        <Menu
          right
          pageWrapId="js-page-wrapper"
          outerContainerId="js-main-wrapper"
          burgerButtonClassName="menu-custom__burger-button"
        >
          <LinkWrapper><Link to="/login">Login</Link></LinkWrapper>
          <LinkWrapper><Link to="/blog">Blog</Link></LinkWrapper>
          <hr/>
          <LinkWrapper><Link to="/contact">Contact</Link></LinkWrapper>
        </Menu>
      </div>
    );
  }
}
