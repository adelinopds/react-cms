import React from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import Logo from '../partials/Logo';
import { logoutUser } from '../../actions/userAction';

const LinkWrapper = styled.div.attrs({ className: 'menu-custom__menu-link' })``;

@connect((store) => {
  return {
    authorized: store.user.authorized
  };
})
export default class PrimaryMenu extends React.Component {

  static defaultProps = {
    authorized: false
  };

  render = () => {
    if (this.props.authorized) {
      return (
        <div>
          <Menu
            pageWrapId="js-page-wrapper"
            outerContainerId="js-main-wrapper"
            burgerButtonClassName="menu-custom__burger-button"
          >
            <Logo id="logo"/>
            {
              (this.props.authorized) ?
                <LinkWrapper>
                  <div onClick={() => {
                    this.props.dispatch(logoutUser());
                  }}>Logout
                  </div>
                </LinkWrapper> :
                <LinkWrapper><Link to="/login">Login</Link></LinkWrapper>
            }
            <LinkWrapper><Link to="/register">Register</Link></LinkWrapper>
            <LinkWrapper><Link to="/user">User</Link></LinkWrapper>
            <LinkWrapper><Link to="/post">Post</Link></LinkWrapper>
            <hr/>
            <LinkWrapper><Link to="/contact">Contact</Link></LinkWrapper>
          </Menu>
        </div>
      );
    }
    return (
      <Redirect to="/login"/>
    );
  }
}
