import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class PostForm extends React.Component {

  render = () => {

    return (
      <Row>
        <Col md={9}>
          Form
        </Col>
        <Col md={3}>
          Panel
        </Col>
      </Row>
    );
  };
}
