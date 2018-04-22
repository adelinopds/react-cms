import { Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';

import BlogPage from '../components/pages/Blog';
import ContactPage from '../components/pages/Contact';
import HomePage from '../components/pages/Home';
import Login from '../components/Login';


const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/login" component={Login}/>
      <Route path="/blog" component={BlogPage}/>
      <Route path="/contact" component={ContactPage}/>
      <Redirect from="*" to="/"/>
    </Switch>
  );
};

export default Routes;
