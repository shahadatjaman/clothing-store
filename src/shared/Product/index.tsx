import React, { FC, useState } from 'react';
import {
  HoverContent,
  Img,
  Money,
  AddToCartButton,
  ProductImage,
  ProductPrice,
  ProductRating,
  ProductTitle,
  Wrapper,
  Container,
} from './Styles';
import { Rating } from '@mui/material';
import { Button } from '../../shared/Button/';
import { Description } from './Styles';
import Link from 'next/link';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import Buttons from './button-group';
import { ProductPropsType } from '@/types/productPropsType';

const Product: FC<ProductPropsType> = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Wrapper>
      <Container
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/*============ = Product Image = ============*/}
        <ProductImage>
          {/* Buttons Groups  */}
          <Buttons isHovered={isHovered} _id={''} />

          <Link href={'/'}>
            <Img
              src={props.image}
              alt="product"
              priority={true}
              width={500}
              height={400}
              layout="responsive"
            />
          </Link>
        </ProductImage>
        {/*===== End of Product Image  ======*/}

        {/*============ = Product Description = ============*/}
        <Description isHovered={isHovered}>
          {/* Product Title */}
          <ProductTitle>
            <Link href={'/'}>{props.title}</Link>
          </ProductTitle>

          {/* Product Rating */}
          <ProductRating>
            <Link href={'/'}>
              <Rating
                name="read-only"
                size="small"
                value={props.rating}
                readOnly
              />
            </Link>
          </ProductRating>

          {/* Product Price */}
          <ProductPrice>
            <Money>${props.price}</Money>
          </ProductPrice>

          {/* Product Hover Content */}
          <HoverContent isHovered={isHovered}>
            <AddToCartButton>
              {/* Add To Cart Button */}
              <Button
                startIcon={<LocalMallIcon />}
                size="small"
                variant="contained"
                color="primary"
              >
                ADD TO CART
              </Button>
            </AddToCartButton>
          </HoverContent>
        </Description>
        {/*===== End of Product Description ======*/}
      </Container>
    </Wrapper>
  );
};

export default Product;
