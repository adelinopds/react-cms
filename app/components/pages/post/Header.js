import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Row, Col, ButtonToolbar,
  Button, FormControl
} from 'react-bootstrap';
import SweetAlert from 'sweetalert2-react';
import {
  deletePosts, setSearchFilter as setPostSearchFilter,
  toggleFiltersComponent
} from '../../../actions/postActions';

const SomeComponent = withRouter(props => <PostHeader {...props}/>);

@connect((store) => {
  return {
    filters: store.post.filters,
    posts: store.demo.posts,
    selectedPosts: store.post.selectedPosts,
  };
})
export default class PostHeader extends React.Component {

  state = {
    keyword: '',
    showAlert: false,
    showWarning: false,
    titleWarning: '',
    contentWarning: '',
    showConfirm: false,
    titleConfirm: '',
    contentConfirm: '',
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.filters.keyword !== this.props.filters.keyword) {
      this.setState({
        keyword: nextProps.filters.keyword
      });
    }
  };

  renderAlert = () => {
    return (
      <div className="cms-sweet-alert">
        <SweetAlert
          show={this.state.showAlert}
          type="error"
          title="No selections."
          text="Choose elements to delete"
          onConfirm={() => this.setState({ showAlert: false })}
        />
      </div>
    );
  };

  renderWarning = () => {
    return (
      <div>
        <SweetAlert
          show={this.state.showWarning}
          type="warning"
          title={this.state.titleWarning}
          text={this.state.contentWarning}
          onConfirm={() => {
            this.props.dispatch(deletePosts(this.props.selectedPosts, this.props.posts));
            this.setState({
              showWarning: false,
              showConfirm: true,
              titleConfirm: 'Success!',
              contentConfirm: 'Selected items were removed'
            });
          }}
        />
      </div>
    );
  };

  renderConfirm = () => {
    return (
      <div>
        <SweetAlert
          className="cms-sweet-confirm"
          show={this.state.showConfirm}
          type="success"
          title={this.state.titleConfirm}
          text={this.state.contentConfirm}
          onConfirm={() => this.setState({ showConfirm: false })}
        />
      </div>
    );
  };

  /**
   * Render header for Post list
   * @returns {*}
   */
  renderForList = () => {
    return (
      <Row>
        <Col md={4}>
          <h2>{this.props.posts.length} Posts</h2>
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
            <Button
              bsStyle="danger"
              className="cms-button"
              onClick={
                () => {
                  if (this.props.selectedPosts.length === 0) {
                    this.setState({
                      showAlert: true
                    });
                  } else {

                    let content = 'Elements to remove: ';
                    this.props.selectedPosts.forEach((post) => {
                      content += ` ${post.title},`;
                    });
                    content = content.slice(0, -1);

                    this.setState({
                      titleWarning: 'Are you sure about this remove?',
                      contentWarning: `${content}`,
                      showWarning: true
                    });
                  }
                }
              }
            >
              Delete
            </Button>
            <Button
              bsStyle="warning"
              className="cms-button"
              onClick={() => this.props.dispatch(toggleFiltersComponent())}
            >
              Show filters
            </Button>
            <Link to="/post/create">
              <Button bsStyle="primary" className="cms-button">Add new</Button>
            </Link>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  };

  renderForForm = (view) => {
    return (
      <Row>
        <Col md={4}>
          <h2>Add new post</h2>
        </Col>

        <Col md={8}>
          <ButtonToolbar className="header-buttons">
            <Link to="/post">
              <Button bsStyle="warning" className="cms-button">Back</Button>
            </Link>
          </ButtonToolbar>
        </Col>
      </Row>
    );
  };

  render = () => {

    let view = 'list';
    if (window.location.pathname.indexOf('edit') !== -1) {
      view = 'edit';
    }
    if (window.location.pathname.indexOf('create') !== -1) {
      view = 'create';
    }

    return (

      <div className="cms-header">

        {this.renderAlert()}
        {this.renderWarning()}
        {this.renderConfirm()}

        {
          (view !== 'list') ?
            this.renderForForm(view) :
            this.renderForList()
        }
      </div>

    );
  };
}
