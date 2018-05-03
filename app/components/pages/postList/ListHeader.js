import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Row, Col, ButtonToolbar,
  Button, FormControl
} from 'react-bootstrap';
import SweetAlert from 'sweetalert2-react';
import styled from 'styled-components';
import {
  deletePosts, setSearchFilter as setPostSearchFilter,
  toggleFiltersComponent
} from '../../../actions/pages/postActions';

const SweetAlertWrapper = styled.div``;

@connect((store) => {
  return {
    posts: store.demo.posts,
    filters: store.postPage.filters,
    selectedPosts: store.postPage.selectedPosts,
  };
})
@withRouter
export default class ListHeader extends React.Component {

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

  renderSweetAlerts = () => {
    return (
      <SweetAlertWrapper>

        <div className="cms-sweet-alert">
          <SweetAlert
            show={this.state.showAlert}
            type="error"
            title="No selections."
            text="Choose elements to delete"
            onConfirm={() => this.setState({ showAlert: false })}
          />
        </div>

        <div className="cms-sweet-warning">
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

        <div className="cms-sweet-confirm">
          <SweetAlert
            show={this.state.showConfirm}
            type="success"
            title={this.state.titleConfirm}
            text={this.state.contentConfirm}
            onConfirm={() => this.setState({ showConfirm: false })}
          />
        </div>

      </SweetAlertWrapper>


    );
  };

  render = () => {

    return (

      <div className="cms-header">

        {this.renderSweetAlerts()}

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
      </div>

    );
  };
}
