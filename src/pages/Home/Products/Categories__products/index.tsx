import React, { FC } from 'react';
import { H3, Title, Wrapper } from './Styles';
import { ProductPropsType } from '@/types/productPropsType';
import Product from './Product';

interface PropsTypes {
  title: string;
  products: ProductPropsType[];
}

const Cate__Products: FC<PropsTypes> = (props) => {
  const { title, products } = props;
  return (
    <Wrapper>
      <Title>
        <H3>{title}</H3>
      </Title>
      {products?.map((product, index) => (
        <Product
          key={index}
          _id={product._id}
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </Wrapper>
  );
};

export default Cate__Products;
