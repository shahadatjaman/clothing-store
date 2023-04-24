import React, { FC } from 'react';
import {
  Add,
  CartItem,
  Info,
  ItemAction,
  ItemImage,
  ItemText,
  Name,
  Price,
  QPrice,
  Quantity,
} from './Styles';
import { CartPropsTypes } from '@/types/CartPropsTypes';
import Image from 'next/image';

const Item: FC<CartPropsTypes> = (props) => {
  const { id, name, img, price, qty, color, size } = props;

  return (
    <CartItem>
      <ItemImage>
        <Image src={img} alt={name} width={70} height={90} />
      </ItemImage>
      <ItemText>
        <Name>{name}</Name>
        <Info>
          <Add>{color + ','}</Add>
          <Add>{size}</Add>
        </Info>
        <QPrice>
          <Quantity>1 X</Quantity>
          <Price> ${price}</Price>
        </QPrice>
      </ItemText>
      <ItemAction>
        <i className="far fa-trash-alt"></i>
      </ItemAction>
    </CartItem>
  );
};

export default Item;
