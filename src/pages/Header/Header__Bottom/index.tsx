import Container from '@/shared/Grid/Container';
import React from 'react';
import { Content, HeaderWrapper } from './Styles';
import Left__Content from './Left__Content';
import Right__Content from './Right__Content';

const Header__Bottom = () => {
  return (
    <HeaderWrapper>
      <Container>
        <Content>
          <Left__Content />
          <Right__Content />
        </Content>
      </Container>
    </HeaderWrapper>
  );
};

export default Header__Bottom;
