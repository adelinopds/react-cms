import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import {
  Row, Col, ButtonToolbar,
  Button
} from 'react-bootstrap';
import SweetAlert from 'sweetalert2-react';
import styled from 'styled-components';

const SweetAlertWrapper = styled.div``;

@withRouter
export default class FormHeader extends React.Component {

  static defaultProps = {
    editionMode: false
  };

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

  renderHeader = () => {
    return (
      <Row>
        <Col md={4}>
          <h2>{this.props.editionMode ? 'Edit post' : 'Add new post'}</h2>
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

    return (

      <div className="cms-header">
        {this.renderSweetAlerts()}
        {this.renderHeader()}
      </div>

    );
  };
}
