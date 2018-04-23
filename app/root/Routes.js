import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import User from '../components/pages/User';
import ContactPage from '../components/pages/Contact';
import HomePage from '../components/pages/Home';
import Post from '../components/pages/Post';
import Login from '../components/Login';
import Register from '../components/Register';


const Routes = () => {

  return (
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/post" component={Post}/>
      <Route path="/user" component={User}/>
      <Route path="/contact" component={ContactPage}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
};

export default Routes;
