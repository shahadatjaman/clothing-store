import React from 'react';
import { Grid } from '@mui/material';
import Section from '@/shared/Section';
import { BransItems } from './Styles';
import { brands } from './data';
import Brand from './Brand';

import Section__Title from '@/shared/Section/Section__Title';

const Popular__Brands = () => {
  return (
    <Section>
      <Section__Title title="Popular" sub_ttile="Clothing brands" />
      <BransItems>
        <Grid container spacing={2}>
          {brands?.map((brand, index) => (
            <Grid key={index} item xs={3}>
              <Brand img={brand.img} name={brand.name} />
            </Grid>
          ))}
        </Grid>
      </BransItems>
    </Section>
  );
};

export default Popular__Brands;
