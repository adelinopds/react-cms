import React from 'react';
import { Grid } from 'react-bootstrap';
import { PageWrapper } from '../../constants/constants';
import PrimaryMenu from '../menus/PrimaryMenu';
import Header from './post/Header';
import CreateForm from './post/CreateForm';

export default class PostForm extends React.Component {

  render = () => {

    return (
      <PageWrapper>
        <PrimaryMenu/>

        <Grid >
          <Header/>
          <CreateForm/>
        </Grid>
      </PageWrapper>
    );
  };
}
