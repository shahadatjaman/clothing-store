import React from 'react';
import {
  CartCheckBox,
  CartItems,
  CartTerm,
  CartTermText,
  CartTotal,
  CartTotalPrice,
  CartTotalTitle,
  CartView,
  CartViewLink,
  DotLink,
  Money,
  ViewCartButton,
} from './Styles';
import { addToCartItems } from '../data';
import Item from './CartItem';
import { ViewCartLink } from './Styles';
import { Checkbox } from '@mui/material';
import { Button } from '@/shared/Button';

const AddToCartItems = () => {
  return (
    <CartItems>
      {addToCartItems?.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          img={item.img}
          name={item.name}
          size={item.size}
          color={item.color}
          qty={item.qty}
          price={item.price}
        />
      ))}
      <ViewCartLink>
        <DotLink href={'/'}>...</DotLink>
      </ViewCartLink>

      <CartTotal>
        <CartTotalTitle>TOTAL:</CartTotalTitle>
        <CartTotalPrice>
          <Money>$920.00</Money>
        </CartTotalPrice>
      </CartTotal>

      <CartTerm>
        <CartCheckBox>
          <Checkbox
            size="small"
            checked
            inputProps={{ 'aria-label': 'controlled' }}
          />
        </CartCheckBox>
        <CartTermText>I aggree with the terms and conditions</CartTermText>
      </CartTerm>
      <ViewCartButton>
        <Button disabled fullWidth variant="contained" color="primary">
          PROCEED TO CHECKOUT
        </Button>
      </ViewCartButton>
      <CartView>
        <CartViewLink href={'/'}>VIEW CART</CartViewLink>
      </CartView>
    </CartItems>
  );
};

export default AddToCartItems;
