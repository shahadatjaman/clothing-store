import React from 'react';
import Layout from '../Layout';

import Breadcrumb from '@/shared/Breadcrumb';
import Section from '@/shared/Section';

const Product__Page = () => {
  return (
    <Layout>
      <Breadcrumb
        first_path={{ name: 'Home', path: '/' }}
        sec_path={{ name: 'Product Name', path: '/product/2s1s2' }}
      />
      <Section>Hello</Section>
    </Layout>
  );
};

export default Product__Page;
