import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageWrapper } from '../../../constants/constants';
import PostListHeader from './PostListHeader';
import PostListFilters from './PostListFilters';

export default class PostList extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <Grid>
          <Row>
            <Col md={12}>

              {/* Header component */}
              <PostListHeader/>

              <hr/>

              <PostListFilters/>

              <hr/>

              <div>
                <Row>
                  <Col md={12}>
                    List Column: [action-SELECT],
                    [title], [short-description 100 chars],
                    [author], [category], [date], [action-EDIT], [action-DELETE]
                  </Col>
                </Row>
              </div>

            </Col>
          </Row>

        </Grid>
      </PageWrapper>
    );
  };
}
