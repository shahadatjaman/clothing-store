import Link from "next/link";
import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 8px 0;
  background: ${({theme}) => theme.colors.grayLight};
`


export const Ul = styled.ul``;

export const Li = styled.li`
color: ${({theme}) => theme.colors.gray};
display: inline-block;
`;

export const TextLink = styled(Link)`

`

export const Slash = styled.span`
 margin: 0 8px;
`;