import React, { FC } from 'react';
import { AccountWrapper, Item, Items, TextLink } from './Styles';
import { MenuItems } from './data';

const MyAccount = () => {
  return (
    <AccountWrapper>
      <Items>
        {MenuItems?.map((menu, index) => (
          <Item key={index}>
            {menu.icon}
            <TextLink href={menu.path}>{menu.name}</TextLink>
          </Item>
        ))}
      </Items>
    </AccountWrapper>
  );
};

export default MyAccount;
