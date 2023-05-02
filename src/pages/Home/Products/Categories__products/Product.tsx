import React, { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  DiscountPrice,
  ProductDesc,
  ProductImg,
  ProductPrice,
  ProductRatting,
  ProductTitle,
  ProductWrapper,
} from './Styles';
import { ProductPropsType } from '@/types/productPropsType';

import { Rating } from '@mui/material';

const Product: FC<ProductPropsType> = (props) => {
  const { _id, title, image, price, rating } = props;
  return (
    <ProductWrapper>
      <ProductImg>
        <Link href={'/'}>
          <Image src={image} alt={title} width={100} height={115} />
        </Link>
      </ProductImg>
      <ProductDesc>
        <ProductRatting>
          <Link href={'/'}>
            <Rating name="read-only" size="small" value={rating} readOnly />
          </Link>
        </ProductRatting>

        <ProductTitle>
          <Link href={'/'}>{title}</Link>
        </ProductTitle>
        <ProductPrice>
          ${price} {' - '} <DiscountPrice>${40}</DiscountPrice>
        </ProductPrice>
      </ProductDesc>
    </ProductWrapper>
  );
};

export default Product;
