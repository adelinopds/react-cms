/* eslint no-param-reassign: ["error", {
  "props": true, "ignorePropertyModificationsFor": ["element"]
}] */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Row, Col, Table, Button } from 'react-bootstrap';
import { getPosts, resetFetchingSettings, setSelectedPosts } from '../../../actions/postActions';
import config from '../../../config';
import { setPostsDemo } from '../../../actions/demoActions';

@connect((store) => {
  return {
    filters: store.post.filters,
    deleted: store.post.deleted,
    selectAll: store.post.selectAll,
    selectedPosts: store.post.selectedPosts,
    posts: store.demo.posts,
    postsLoaded: store.demo.postsLoaded
  };
})
export default class PostList extends React.Component {

  static defaultProps = {
    posts: [],
    selectAll: false
  };

  componentDidMount = () => {
    if (config.DEMO && !this.props.postsLoaded) {
      this.props.dispatch(setPostsDemo());
    }
  };

  componentWillUpdate = (nextProps) => {

    if (nextProps.deleted) {
      const node = document.getElementById('js-post-list-table');
      const elements = node.querySelectorAll('.js-select-post');
      elements.forEach((element) => {
        if (element.checked === true) {
          element.checked = false;
        }
      });

      this.props.dispatch(resetFetchingSettings());
    }
  };

  componentillReceiveProps = (nextProps) => {
    if (nextProps.filters !== this.props.filters) {
      if (!config.DEMO) {
        this.props.dispatch(getPosts(nextProps.filters));
      }
    }
  };

  selectedUnselectedRecords = () => {

    const node = document.getElementById('js-post-list-table');
    const elements = node.querySelectorAll('.js-select-post');

    if (this.props.selectAll) {
      elements.forEach((element) => {
        if (element.checked === true) {
          element.checked = false;
        }
      });
      this.props.dispatch(setSelectedPosts([], false));
    } else {
      elements.forEach((element) => {
        if (element.disabled === false) {
          element.checked = true;
        }
      });
      this.props.dispatch(setSelectedPosts(this.props.posts, true));
    }
  };

  selectSingleRecord = (post) => {

    const found = _.find(this.props.selectedPosts, { id: post.id });
    let modified;
    if (found) {
      modified = this.props.selectedPosts.filter((selected) => {
        if (selected !== post) {
          return selected;
        }
        return null;
      });
      this.props.dispatch(setSelectedPosts(modified, this.props.selectAll));
    } else {
      modified = this.props.selectedPosts.concat(post);
      this.props.dispatch(setSelectedPosts(modified, this.props.selectAll));
    }
  };

  renderHeaders = () => {
    return (
      <tr>
        <th>
          <label
            htmlFor="js-select-all-post-checkbox"
            className="custom-control list-custom-control custom-control--checkbox"
          >
            <input
              id="js-select-all-post-checkbox"
              type="checkbox"
              onChange={() => this.selectedUnselectedRecords()}
              checked={this.props.selectAll ? 'checked' : ''}
            />
            <div className="custom-control__indicator"/>
          </label>
        </th>
        <th>Title</th>
        <th>Content</th>
        <th>Author</th>
        <th>Category</th>
        <th>Created At</th>
        <th>Actions</th>
      </tr>
    );
  };

  renderContent = () => {
    return this.props.posts.map((post, index) => {
      return (
        <tr key={index}>
          <td>
            <label
              htmlFor={`js-select-post-${index}-checkbox`}
              className="custom-control list-custom-control custom-control--checkbox"
            >
              <input
                className="js-select-post"
                id={`js-select-post-${index}-checkbox`}
                type="checkbox"
                onChange={() => {
                  this.selectSingleRecord(post);
                }}
              />
              <div className="custom-control__indicator"/>
            </label>
          </td>
          <td>{post.title}</td>
          <td>{post.content}</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>
            <Link to={`/post/edit/${post.uuid}`}>
              <Button bsSize="small" className="cms-edit-button">Edit</Button>
            </Link>
          </td>
        </tr>
      );
    });
  };

  render = () => {

    return (
      <div className="post-list">
        <Row>
          <Col md={12}>
            <Table id="js-post-list-table" responsive>
              <thead>
                {this.renderHeaders()}
              </thead>
              <tbody>
                {this.renderContent()}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}
