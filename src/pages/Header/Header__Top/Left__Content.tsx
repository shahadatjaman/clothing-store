import React from 'react';
import { Gift, LeftInfo, Li, LinkStyled, Ul } from './Styles';

const Left__Content = () => {
  return (
    <LeftInfo>
      <Ul>
        <Li>
          <Gift />
          FREE 2-DAYS STANDARD SHIPPING ON ORDERS $255+
          <LinkStyled href={'/'}> MORE DETAILS</LinkStyled>
        </Li>
      </Ul>
    </LeftInfo>
  );
};

export default Left__Content;
