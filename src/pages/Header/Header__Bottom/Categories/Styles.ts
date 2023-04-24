import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// Drop down menu | Categories

export const Ul = styled.ul``;

export const Li = styled.li`
  margin: 0.8rem 0rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid #e9e7e7;
  display: block;
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: start;
  &:last-child {
    border-bottom: none;
  }
  &:first-child {
    margin-top: 0;
  }

  &:hover {
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
    img {
      opacity: 1;
      
    }
  }
`;

export const TextLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  margin-left: 0.6rem;
  text-transform: uppercase;
  font-size: 14px;
`;

export const Img = styled(Image)`
   opacity: 0.5;
`;