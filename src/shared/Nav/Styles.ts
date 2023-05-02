import styled from 'styled-components';

export const Navbar = styled.nav``;

export const Ul = styled.ul`
  margin: 0;
`;

export const Li = styled.li`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.gray};
  display: inline-block;
  margin-right: 1.5rem;
  text-transform: uppercase;
  &:last-child {
    margin-right: 0;
  }
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`;

export const TextLink = styled.span``;
