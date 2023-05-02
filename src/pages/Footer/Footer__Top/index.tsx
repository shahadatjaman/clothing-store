import React from 'react';
import { H4, Wrapper } from './Styles';
import { Container, Grid } from '@mui/material';
import Enter__Email from './Enter__Email';
import Social__Media from './Social__Media';

const Footer_Top = () => {
  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <H4>BE IN TOUCH WITH US :</H4>
          </Grid>
          <Grid item xs={6}>
            <Enter__Email />
          </Grid>
          <Grid item xs={3}>
            <Social__Media />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Footer_Top;
