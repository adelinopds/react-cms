import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import User from '../components/pages/User';
import ContactPage from '../components/pages/Contact';
import HomePage from '../components/pages/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import isAuthorized from '../helpers/isAuthorized';
import PostIndex from '../components/pages/post/PostIndex';
import PostForm from '../components/pages/post/PostForm';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (isAuthorized()) {
        return (
          <Component {...props}/>
        );
      }
      return (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }}/>
      );
    }}/>
);

const Routes = () => {

  return (
    <Switch>
      <AuthenticatedRoute path="/" component={HomePage} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={SignUp}/>
      <AuthenticatedRoute path="/post" component={PostIndex}/>
      <AuthenticatedRoute path="/post/edit" component={PostForm}/>
      <AuthenticatedRoute path="/post/add" component={PostForm}/>
      <AuthenticatedRoute path="/user" component={User}/>
      <AuthenticatedRoute path="/contact" component={ContactPage}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
};

export default Routes;
