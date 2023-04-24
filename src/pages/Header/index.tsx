import React from 'react';
import { HeaderWrapper } from './Styles';
import Header__Top from './Header__Top/';
import Header__Mid from './Header__Mid';
import Header__Bottom from './Header__Bottom';

const Header = () => {
  return (
    <HeaderWrapper>
      <Header__Top />
      <Header__Mid />
      <Header__Bottom />
    </HeaderWrapper>
  );
};

export default Header;
