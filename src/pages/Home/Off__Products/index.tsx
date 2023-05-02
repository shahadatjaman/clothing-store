import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Hover__Button from '@/shared/Hover__Buttoon';
import Section from '@/shared/Section';

import { Img } from './Styles';
import { itmes } from './data';

const Offer__Products = () => {
  const [isHovered, setIsHovered] = useState(-1);

  return (
    <Section>
      <Grid container spacing={2}>
        {itmes?.map((item, index) => (
          <Grid
            onMouseEnter={() => setIsHovered(index)}
            onMouseLeave={() => setIsHovered(-1)}
            key={index}
            item
            xs={6}
            position={'relative'}
          >
            <Img
              src={item.img}
              alt={item.button_title}
              width={100}
              height={100}
              layout="responsive"
            />
            <Hover__Button
              isHovered={isHovered === index}
              button_sub_title={item.button_sub_title}
              button_title={item.button_title}
              coloredText={item.coloredText}
            />
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default Offer__Products;
