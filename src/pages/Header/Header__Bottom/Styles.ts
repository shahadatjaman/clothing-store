import Link from 'next/link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

/*=============================================
=            Left Content                     =
=============================================*/

export const LeftContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Categories = styled.div`
  position: relative;
`;

export const Button = styled.button`
  text-transform: uppercase;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 6px 6px 0px 0px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 200px;
  padding: 10px 20px 7px 20px;
`;
export const ButtonIcon = styled.i`
  transition: all 0.5s;
`;



export const Icon = styled.i`
  margin-right: 0.6rem;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Nav = styled.nav`
  margin-left: 1.8rem;
  margin-bottom: 0.6;
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const Items = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  font-weight: 100;
  text-transform: uppercase;
  font-size: 13px;
  margin-left: 1.5rem;
  color: ${({ theme }) => theme.colors.black};
  &:first-child {
    margin-left: 0;

    /* It'll be deleted */
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ItemLink = styled(Link)``;

/*=====  End of Left Content  ======*/

/*=============================================
=            Right Content                    =
=============================================*/
export const RightContent = styled.div`
  position: relative;
`;

export const RightIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.6;
`;

export const RightIcon = styled.div`
  margin-left: 2rem;
`;

interface IconPropsTypes {
  isOpen?: boolean;
}

export const IconStyled = styled.i<IconPropsTypes>`
  cursor: pointer;
  color: ${({ theme, isOpen }) =>
    isOpen ? theme.colors.primary : theme.colors.black};
`;

export const Badge = styled.div``;

/*----------  Add To Cart  ----------*/

export const CartItems = styled.div``;

export const CartItem = styled.div``;

export const ItemImage = styled.div``;

export const ItemText = styled.div``;

export const ItemAction = styled.div``;

/*=====  End of Right Content  ======*/
