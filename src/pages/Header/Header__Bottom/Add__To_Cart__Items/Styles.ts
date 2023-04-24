import styled from 'styled-components';
import Link from 'next/link';

/*----------  Add To Cart  ----------*/

export const CartItems = styled.div``;

export const CartItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  margin-bottom: 1rem;
`;

export const ItemImage = styled.div`
  margin-right: 1.4rem;
  cursor: pointer;
`;

export const ItemText = styled.div``;

export const Name = styled.h2`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #191919;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Info = styled.ul`
  display: flex;
`;

export const Add = styled.li`
  color: #999999;
  font-size: 11px;
  line-height: 16px;
  margin-right: 4px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

export const QPrice = styled.div``;

export const Quantity = styled.span`
  font-size: 14px;
  color: #999999;
  cursor: pointer;
`;

export const Price = styled.span`
  font-size: 16px;
  color: #191919;
  font-weight: 500;
  cursor: pointer;
`;

export const ItemAction = styled.div`
  cursor: pointer;
  margin-left: 8px;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ViewCartLink = styled.div`
  text-align: center;
`;

export const DotLink = styled(Link)`
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const CartTotal = styled.div`
  border-top: 1px solid #e9e7e7;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartTotalTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.black};
`;

export const CartTotalPrice = styled.div``;

export const Money = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
`;

export const CartTerm = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

export const CartCheckBox = styled.span`
  margin-right: 8px;
`;

export const CartTermText = styled.span`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
`;

export const ViewCartButton = styled.div`
  text-align: center;
`;

export const CartView = styled.div`
  text-align: center;
  margin: 0.8rem 0;
`;

export const CartViewLink = styled(Link)`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;
