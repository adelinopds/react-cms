import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Row, Col, ButtonToolbar,
  Button
} from 'react-bootstrap';
import SweetAlert from 'sweetalert2-react';
import styled from 'styled-components';
import { deletePosts } from '../../../actions/postActions';

const SweetAlertWrapper = styled.div``;

@connect((store) => {
  return {
    filters: store.post.filters,
    posts: store.demo.posts,
    selectedPosts: store.post.selectedPosts,
  };
})
@withRouter
export default class FormHeader extends React.Component {

  state = {
    showAlert: false,
    showWarning: false,
    titleWarning: '',
    contentWarning: '',
    showConfirm: false,
    titleConfirm: '',
    contentConfirm: '',
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

  renderHeader = (view) => {
    return (
      <Row>
        <Col md={4}>
          <h2>{(view === 'edit') ? 'Edit post' : 'Add new post'}</h2>
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
        {this.renderSweetAlerts()}
        {this.renderHeader(view)}
      </div>

    );
  };
}
