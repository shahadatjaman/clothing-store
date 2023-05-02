import React, { FC } from 'react';
import Nav from '@/shared/Nav';
import Section from '@/shared/Section';
import { Grid } from '@mui/material';

import { H3, Navbar, Products, SectionTitle, Title } from './Styles';
import Slider from '@/shared/Carousel';
import Product from '@/shared/Product';
import { ProductPropsType } from '@/types/productPropsType';

interface PropsTypes {
  section_title: string;
  menus: any;
  products: ProductPropsType[];
}

const __Products: FC<PropsTypes> = (props) => {
  const { menus, products, section_title } = props;
  return (
    <Section>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <SectionTitle>
            <Title>
              <H3>{section_title}</H3>
            </Title>
            <Navbar>
              <Nav items={menus} />
            </Navbar>
          </SectionTitle>
          <Products>
            <Slider
              buttonsPosition="left-right"
              respon={{ device: 'desktop', items: 4.2 }}
              draggable={false}
            >
              {products?.map((product, index) => (
                <Product
                  _id={product._id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  key={index}
                />
              ))}
            </Slider>
          </Products>
        </Grid>
      </Grid>
    </Section>
  );
};

export default __Products;
