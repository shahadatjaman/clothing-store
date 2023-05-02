import React from 'react';
import Section from '@/shared/Section';
import { Grid } from '@mui/material';

import Cate__Products from './Categories__products';
import { products } from './data';

const Products = () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Cate__Products title="new products" products={products} />
        </Grid>
        <Grid item xs={4}>
          <Cate__Products title="SPECIAL PRODUCTS" products={products} />
        </Grid>
        <Grid item xs={4}>
          <Cate__Products title="FEATURED PRODUCTS" products={products} />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Products;
