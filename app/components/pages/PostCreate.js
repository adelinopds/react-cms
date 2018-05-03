import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';
import CreateForm from './postCreate/CreateForm';
import FormHeader from './postCreate/CreateFormHeader';
import { selectPost } from '../../actions/models/postActions';

@connect(store => ({
  posts: store.demo.posts,
}))
@withRouter
export default class PostForm extends React.Component {

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

  render = () => {
    let isEdit = false;
    if (this.props.location.pathname.indexOf('edit') !== -1) {
      isEdit = true;
    }

    return (
      <PageWrapper>
        <PrimaryMenu/>
        <Grid>
          <FormHeader editionMode={isEdit}/>
          <CreateForm editionMode={isEdit}/>
        </Grid>
      </PageWrapper>
    );
  };
}
