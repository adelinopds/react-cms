import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import Logo from '../partials/Logo';

const LinkWrapper = styled.div.attrs({ className: 'menu-custom__menu-link' })``;


export default class PrimaryMenu extends React.Component {

  render = () => {
    return (
      <div>
        <Menu
          pageWrapId="js-page-wrapper"
          outerContainerId="js-main-wrapper"
          burgerButtonClassName="menu-custom__burger-button"
        >
          <Logo id="logo"/>
          <LinkWrapper><Link to="/login">Login</Link></LinkWrapper>
          <LinkWrapper><Link to="/register">Register</Link></LinkWrapper>
          <LinkWrapper><Link to="/user">User</Link></LinkWrapper>
          <LinkWrapper><Link to="/post">Post</Link></LinkWrapper>
          <hr/>
          <LinkWrapper><Link to="/contact">Contact</Link></LinkWrapper>
        </Menu>
      </div>
    );
  }
}
