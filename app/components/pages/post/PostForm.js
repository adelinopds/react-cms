import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { PageWrapper } from '../../../constants/constants';
import PrimaryMenu from '../../menus/PrimaryMenu';

export default class PostForm extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <PrimaryMenu/>
        <Grid>
          <Row>
            <Col md={9}>
              Form
            </Col>
            <Col md={3}>
              Panel
            </Col>
          </Row>
        </Grid>
      </PageWrapper>
    );
  };
}
