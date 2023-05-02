import React from 'react';
import { Wrapper } from './Styles';
import { Container, Grid } from '@mui/material';
import Left__Content from './Left__Content';
import Right__Content from './Right__Content';
const Footer__Bottom = () => {
  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Left__Content />
          </Grid>
          <Grid item xs={7}>
            <Right__Content />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Footer__Bottom;
