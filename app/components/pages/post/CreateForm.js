import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import { Row, Col, FormControl, Button } from 'react-bootstrap';
import CKEditor from 'react-ckeditor-component';
import CategoryFilter from '../../filters/CategoryFilter';
import { createPostDemo } from '../../../actions/demoActions';

@connect(store => ({ ...store }))
@withRouter
export default class CreateForm extends React.Component {

  state = {
    title: '',
    category: '',
    content: 'content',
  };

  onChange = (evt) => {
    console.log('onChange fired with event info: ', evt);
    const newContent = evt.editor.getData();
    this.setState({
      content: newContent
    });
  };

  onBlur = (evt) => {
    console.log('onBlur event called with event info: ', evt);
  };

  afterPaste = (evt) => {
    console.log('afterPaste event called with event info: ', evt);
  };

  save = () => {
    const post = {
      title: this.state.title,
      content: this.state.content,
      category: this.state.category,
      author: {
        name: 'paul johns',
        role: 'admin'
      },
      createdAt: moment().format(moment().ISO_8601)
    };
    this.props.dispatch(createPostDemo(post));

    console.log(this.props);

    this.props.history.push('/post');
  };

  render = () => {

    return (
      <Row className="post-create-form">
        <Col xs={12} md={9} className="main-panel">

          <div className="form-block">
            <FormControl
              type="text"
              value={this.state.title}
              placeholder="Title"
              onChange={(event) => {
                this.setState({
                  title: event.target.value
                });
              }}
            />
          </div>

          <div className="form-block">
            <CKEditor
              activeClass="p10"
              content={this.state.content}
              events={{
                blur: this.onBlur,
                afterPaste: this.afterPaste,
                change: this.onChange
              }}
            />
          </div>

        </Col>
        <Col xs={12} md={3} className="side-panel">

          <div className="form-block action-button">
            <Button
              bsStyle="primary"
              className="cms-button"
              onClick={
                () => this.save()
              }
            >
              Save
            </Button>
          </div>

          <div className="form-block select-option">
            <CategoryFilter
              multiSelect={true}
              placeholder="Category"
              callback={(category) => {
                this.setState({ category });
              }}
            />
          </div>
        </Col>

      </Row>
    );
  };
}
