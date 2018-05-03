import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import Filters from './postList/ListFilters';
import List from './postList/List';
import PrimaryMenu from '../menus/PrimaryMenu';
import ListHeader from './postList/ListHeader';

export default class Post extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <PrimaryMenu />
        <Grid>
          <Row>
            <Col md={12}>
              <ListHeader />
              <Filters />
              <List />
            </Col>
          </Row>

        </Grid>
      </PageWrapper>
    );
  };
}
