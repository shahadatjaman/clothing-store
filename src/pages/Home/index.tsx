import React from 'react';
import Hero_Section from './Hero_section';
import __Products from './Categories__products/Products';
import {
  items,
  men__products,
  women__products,
} from './Categories__products/data';
import Offer__Products from './Off__Products';
import Products from './Products';
import Popular__Brands from './Popular__Brand';
import Follow__US from './Follow__US';
import Layout from '../Layout';

const Home = () => {
  return (
    <Layout>
      <Hero_Section />

      {/* Women's products */}
      <__Products
        section_title={"WOMEN'S"}
        menus={items}
        products={women__products}
      />

      {/* Men's products */}
      <__Products
        section_title={"MEN'S"}
        menus={items}
        products={men__products}
      />

      {/* Products offer thumbnail */}
      <Offer__Products />

      {/* featured,new and special products */}
      <Products />

      {/* Popular brands */}
      <Popular__Brands />

      {/* Follow us   */}
      <Follow__US />
    </Layout>
  );
};

export default Home;
