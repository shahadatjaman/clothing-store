import React from 'react';
import { Contents, HeaderWrapper } from './Styles';
import Container from '@/shared/Grid/Container';
import Left__Content from './Left__Content';
import Right__Content from './Right__Content';

const Header__Mid = () => {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <Contents>
          <Left__Content />
          <Right__Content />
        </Contents>
      </Container>
    </HeaderWrapper>
  );
};

export default Header__Mid;
