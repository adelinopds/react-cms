import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import Header from './post/Header';
import Filters from './post/Filters';
import List from './post/List';
import PrimaryMenu from '../menus/PrimaryMenu';

export default class Post extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <PrimaryMenu />
        <Grid>
          <Row>
            <Col md={12}>
              <Header />
              <Filters />
              <List />
            </Col>
          </Row>

        </Grid>
      </PageWrapper>
    );
  };
}
