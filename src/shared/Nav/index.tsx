import React, { FC } from 'react';
import { Li, Navbar, TextLink, Ul } from './Styles';
import { NavPropsTypes } from '@/types/NavpropsTypes';

const Nav: FC<NavPropsTypes> = ({ items }) => {
  return (
    <Navbar>
      <Ul>
        {items?.map((item, index) => (
          <Li key={index}>
            <TextLink>{item.name}</TextLink>
          </Li>
        ))}
      </Ul>
    </Navbar>
  );
};

export default Nav;
