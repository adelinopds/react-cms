import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageWrapper } from '../../../constants/constants';
import PostHeader from './PostHeader';
import PostFilters from './PostFilters';
import PostList from './PostList';

export default class PostIndex extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <Grid>
          <Row>
            <Col md={12}>
              <PostHeader />
              <PostFilters />
              <PostList />
            </Col>
          </Row>

        </Grid>
      </PageWrapper>
    );
  };
}
