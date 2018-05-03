import React from 'react';
import { withRouter } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';
import CreateForm from './postCreate/CreateForm';
import FormHeader from './postCreate/CreateFormHeader';

@withRouter
export default class PostForm extends React.Component {

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
