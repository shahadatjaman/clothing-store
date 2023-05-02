import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
 padding: 53px 0;
 background: ${({theme}) => theme.colors.grayLight};
`;


export const H4 = styled.h4`
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  font-family: 'Hind', sans-serif;
  text-transform: uppercase;
`;


export const Ul = styled.ul``;


export const Li = styled.li`
 margin: 12px 0;
 color: #888888;
 line-height: 22px;
 font-size: 14px;
 font-family: 'Hind', sans-serif;
`;

export const TextLink = styled(Link)`

  &:hover{
    color: ${({theme}) => theme.colors.primary};
  }
`;


/*=============================================
=            Contact us Componetns styleds    =
=============================================*/

export const Attribute = styled.span`
 color: ${({theme}) => theme.colors.black};
`;


/*=====  End of Contact us Componetns styleds  ======*/

