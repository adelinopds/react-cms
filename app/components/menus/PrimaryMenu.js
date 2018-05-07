import React from 'react';
import { Auth } from 'aws-amplify';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import Logo from '../partials/Logo';
import { logoutUser } from '../../actions/userActions';

const LinkWrapper = styled.div.attrs({ className: 'menu-custom__menu-link' })``;

@connect((store) => {
  return {
    user: store.user.user
  };
})
@withRouter
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

          <LinkWrapper><Link to="/user">User</Link></LinkWrapper>
          <LinkWrapper><Link to="/post">Post</Link></LinkWrapper>
          <LinkWrapper><Link to="/contact">Contact</Link></LinkWrapper>
          <hr/>
          <LinkWrapper>
            <div onClick={() => {
              Auth.signOut()
                .then((data) => {
                  this.props.dispatch(logoutUser());
                  this.props.history.push('/login');
                })
                .catch(err => console.log(err));
            }}>Logout
            </div>
          </LinkWrapper>
        </Menu>
      </div>
    );
  }
}
