import React from 'react';
import Container from '@/shared/Grid/Container';

import { Content, Left, Right, TopHeaderWrapper } from './Styles';

import Left__Content from './Left__Content';
import Right__Content from './Right__Content';

const Header__Top = () => {
  return (
    <TopHeaderWrapper>
      <Container maxWidth="lg">
        <Content>
          <Left>
            <Left__Content />
          </Left>
          <Right>
            <Right__Content />
          </Right>
        </Content>
      </Container>
    </TopHeaderWrapper>
  );
};

export default Header__Top;
