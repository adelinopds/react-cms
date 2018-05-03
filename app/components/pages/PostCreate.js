import React from 'react';
import { Grid } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';
import CreateForm from './postCreate/CreateForm';
import FormHeader from './postCreate/CreateFormHeader';

export default class PostForm extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <PrimaryMenu/>

        <Grid >
          <FormHeader/>
          <CreateForm/>
        </Grid>
      </PageWrapper>
    );
  };
}
