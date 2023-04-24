import React from 'react';
import { Item, ItemLink, Items, Nav } from './Styles';
import { navMenuItems } from './data';

const Navbar = () => {
  return (
    <Nav>
      <Items>
        {navMenuItems?.map((item, index) => (
          <Item key={index}>
            <ItemLink href={item.path}>{item.name}</ItemLink>
          </Item>
        ))}
      </Items>
    </Nav>
  );
};

export default Navbar;
