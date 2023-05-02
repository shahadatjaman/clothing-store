import React from 'react';
import { Wrapper } from './Styles';
import { Container, Grid } from '@mui/material';
import Collapse from './Collapse';
import { about_text, buy_with_us, categories } from './data';
import Contact__us from './Contact__us';

const Footer__Mid = () => {
  return (
    <Wrapper>
      <Container maxWidth={'lg'}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Collapse colllapse_title="Categories" items={categories} />
          </Grid>
          <Grid item xs={3}>
            <Collapse colllapse_title="BUY WITH US" items={buy_with_us} />
          </Grid>
          <Grid item xs={3}>
            <Collapse text={about_text} colllapse_title="About" />
          </Grid>
          <Grid item xs={3}>
            <Contact__us />
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default Footer__Mid;
