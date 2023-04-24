import styled from 'styled-components';
import {
  AiOutlineLock,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineHeart,
} from 'react-icons/ai';
import { RiScalesLine } from 'react-icons/ri';
import Link from 'next/link';

export const AccountWrapper = styled.div``;

export const LoginIcon = styled(AiOutlineLock)``;

export const RegisterIcon = styled(AiOutlineUser)``;

export const ShoppingIcon = styled(AiOutlineShopping)``;

export const WishIcon = styled(AiOutlineHeart)``;

export const CompareIcon = styled(RiScalesLine)``;

export const Items = styled.ul``;

export const Item = styled.li`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 400;
  &:hover {
    a,
    svg {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const TextLink = styled(Link)`
  margin-left: 0.8rem;
  display: inline-block;
  padding: 7px 0;
  color: ${({ theme }) => theme.colors.gray};
  width: 90%;
`;
