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
    filters: store.post.filters,
    showFilters: store.post.showFilters,
  };
})
export default class PostFilters extends React.Component {

  static defaultProps = {
    keyword: '',
    authors: []
  };

  render = () => {

    if (this.props.showFilters) {
      return (
        <div className="cms-filters">
          <hr/>
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
                multiSelect={true}
                callback={(categories) => {
                  this.props.dispatch(setPostSearchFilter({ categories }));
                }}
              />
            </Col>

            <Col md={4}>
              <SingleDateFilter callback={(createdDate) => {
                this.props.dispatch(setPostSearchFilter({ createdDate }));
              }}/>
            </Col>
          </Row>
        </div>
      );
    }
    return null;
  };
}
