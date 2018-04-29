import React from 'react';
import {
  Row, Col, ButtonToolbar,
  Button, FormControl
} from 'react-bootstrap';

export default class PostListHeader extends React.Component {

  render = () => {

    return (

      <div className="cms-header">
        <Row>
          <Col md={4}>
            <h2>12 Posts</h2>
          </Col>

          <Col md={4}>
            <FormControl
              type="text"
              value={this.props.keyword}
              placeholder="Search ..."
              onChange={() => {
              }}
            />
          </Col>
          <Col md={2}>
            <ButtonToolbar className="header-buttons">
              <Button bsStyle="danger" className="cms-button">Delete</Button>
            </ButtonToolbar>
          </Col>
          <Col md={2}>
            <ButtonToolbar className="header-buttons">
              <Button bsStyle="primary" className="cms-button">Add new</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </div>

    );
  };
}
