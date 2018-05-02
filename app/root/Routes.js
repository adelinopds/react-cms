import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import User from '../components/pages/User';
import ContactPage from '../components/pages/Contact';
import HomePage from '../components/pages/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import isAuthorized from '../helpers/isAuthorized';
import PostIndex from '../components/pages/post/PostIndex';
import PostForm from '../components/pages/post/PostForm';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
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
};

const Routes = () => {

  return (
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/sign-up" component={SignUp}/>

      <ProtectedRoute path="/" component={HomePage} exact/>

      <ProtectedRoute path="/post" component={PostIndex} exact/>
      <ProtectedRoute path="/post/edit" component={PostForm}/>
      <ProtectedRoute path="/post/add" component={PostForm}/>

      <ProtectedRoute path="/user" component={User}/>
      <ProtectedRoute path="/contact" component={ContactPage}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
};

export default Routes;
