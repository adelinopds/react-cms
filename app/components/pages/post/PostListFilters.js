import React from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Col
} from 'react-bootstrap';
import AuthorFilter from '../../filters/AuthorFilter';
import { setSearchFilter as setPostSearchFilter } from '../../../actions/postActions';
import CategoryFilter from '../../filters/CategoryFilter';
import SingleDateFilter from '../../filters/SingleDateFilter';

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
            <AuthorFilter
              callback={(authors) => {
                this.props.dispatch(setPostSearchFilter({ authors }));
              }}
            />
          </Col>
          <Col md={4}>
            <CategoryFilter
              callback={(categories) => {
                this.props.dispatch(setPostSearchFilter({ categories }));
              }}
            />
          </Col>

          <Col md={4}>
            <SingleDateFilter />
          </Col>
        </Row>
      </div>

    );
  };
}
