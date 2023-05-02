import dynamic from 'next/dynamic';
import Section from '@/shared/Section';
import { Container, Grid } from '@mui/material';
import React from 'react';
import Slider__Item from './Left__Content';
import { items } from './data';
import Right__Contetn from './Right__Contetn';
const Slider = dynamic(() => import('@/shared/Carousel'));

const Hero_Section = () => {
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Slider buttonsPosition="left-right" draggable={false}>
            {items?.map((slide, index) => (
              <Slider__Item
                key={index}
                img_url={slide.img_url}
                button_title={slide.butto_title}
                button_sub_title={slide.button_sub_title}
                path={slide.path}
              />
            ))}
          </Slider>
        </Grid>
        <Grid item xs={6}>
          <Right__Contetn />
        </Grid>
      </Grid>
    </Section>
  );
};

export default Hero_Section;
