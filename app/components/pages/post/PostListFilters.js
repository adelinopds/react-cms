import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col,
  FormControl
} from 'react-bootstrap';
import AuthorFilter from '../../filters/AuthorFilter';
import { setSingleFilter } from '../../../actions/postActions';

@connect((store) => {
  return {
    filters: store.post.filters
  };
})
export default class PostListFilters extends React.Component {

  static defaultProps = {
    keyword: '',
    authors: []
  };

  render = () => {

    return (

      <div>
        <Row>
          <Col md={4}>
            <FormControl
              type="text"
              value={this.props.keyword}
              placeholder="Enter title"
              onChange={() => {}}
            />
          </Col>
          <Col md={4}>
            <AuthorFilter
              callback={(authors) => {
                this.props.dispatch(setSingleFilter({ authors }));
              }}
            />
          </Col>
          <Col md={4}>
            [categories]
          </Col>

        </Row>
      </div>

    );
  };
}
