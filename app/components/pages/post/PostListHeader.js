import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, ButtonToolbar,
  Button, FormControl
} from 'react-bootstrap';
import { setSearchFilter as setPostSearchFilter, toggleFiltersComponent } from '../../../actions/postActions';

@connect((store) => {
  return {
    filters: store.post.filters
  };
})
export default class PostListHeader extends React.Component {

  state = {
    keyword: ''
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.filters.keyword !== this.props.filters.keyword) {
      this.setState({
        keyword: nextProps.filters.keyword
      });
    }
  };

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
              value={this.state.keyword}
              placeholder="Search by title"
              onChange={(element) => {
                this.props.dispatch(setPostSearchFilter({
                  keyword: element.target.value
                }));
              }}
            />
          </Col>
          <Col md={4}>
            <ButtonToolbar className="header-buttons">
              <Button bsStyle="danger" className="cms-button">Delete</Button>
              <Button
                bsStyle="warning"
                className="cms-button"
                onClick={() => this.props.dispatch(toggleFiltersComponent())}
              >
                Show filters
              </Button>
              <Button bsStyle="primary" className="cms-button">Add new</Button>
            </ButtonToolbar>
          </Col>
        </Row>
      </div>

    );
  };
}
