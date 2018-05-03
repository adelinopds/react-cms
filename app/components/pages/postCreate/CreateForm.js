import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import CKEditor from 'react-ckeditor-component';
import CategoryFilter from '../../filters/CategoryFilter';
import { createPostDemo, updatePostsDemo } from '../../../actions/demoActions';
import { uuidv1 } from '../../../root/Root';
import {
  selectPost,
  updatePostCategories,
  updatePostContent,
  updatePostTitle
} from '../../../actions/models/postActions';
import config from '../../../config';

@connect(store => ({
  posts: store.demo.posts,
  post: store.postModel.post,
}))
@withRouter
export default class CreateForm extends React.Component {

  static defaultProps = {
    editionMode: false,
  };

  componentDidMount = () => {
    const { dispatch } = this.props;
    const postUuid = this.props.match.params.uuid;
    if (postUuid) {
      const post = _.find(this.props.posts, { uuid: parseInt(postUuid, 10) });
      if (post) {
        dispatch(selectPost(post));
      }
    }
  };

  onChange = (evt) => {
    const newContent = evt.editor.getData();
    this.props.dispatch(updatePostContent(newContent));
  };


  save = () => {

    const {
      uuid, title, content, categories
    } = this.props.post;

    if (uuid && uuid !== '' && config.DEMO) {
      const posts = this.props.posts.filter(obj => obj.uuid !== uuid);
      this.props.dispatch(updatePostsDemo(posts));
    }

    const post = {
      uuid: (uuid && uuid !== '') ? uuid : uuidv1(),
      title,
      content,
      categories,
      author: {
        name: 'paul johns',
        role: 'admin'
      },
      createdAt: moment().format(moment().ISO_8601)
    };
    this.props.dispatch(createPostDemo(post));
    this.props.history.push('/post');
  };

  render = () => {

    const { dispatch, post } = this.props;
    if (!post.content) {
      post.content = '';
    }
    return (
      <Row className="post-create-form">
        <Col xs={12} md={9} className="main-panel">

          <div className="form-block">
            <FormControl
              type="text"
              value={post.title}
              placeholder="Title"
              onChange={(event) => {
                dispatch(updatePostTitle(event.target.value));
              }}
            />
          </div>

          <div className="form-block">
            <CKEditor
              activeClass="p10"
              content={post.content}
              events={{ change: this.onChange }}
            />
          </div>

        </Col>
        <Col xs={12} md={3} className="side-panel">

          <div className="form-block action-button">
            <Button
              bsStyle="primary"
              className="cms-button"
              onClick={() => this.save()}
            >
              Save
            </Button>
          </div>
          {console.log(post.categories, 'post.categories ENTRY!!!!')}
          <div className="form-block select-option">
            <CategoryFilter
              multiSelect={true}
              selected={post.categories}
              placeholder="Category"
              callback={(categories) => {
                console.log(categories, 'categories OUT !!!!');
                dispatch(updatePostCategories(categories));
              }}
            />
          </div>
        </Col>

      </Row>
    );
  };
}
