import React from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';

export default class HomePage extends React.Component {

  render = () => {
    if (localStorage.getItem('start-page')) {
      return (
        <PageWrapper>
          <PrimaryMenu />
          <Grid className="post-list">
            Home page with information about etc.
            There is an option to choose some settings.
            TODO: add API status of settings and add to condition
          </Grid>
        </PageWrapper>
      );
    }
    return (
      <Redirect to="/post" />
    );
  }
}
