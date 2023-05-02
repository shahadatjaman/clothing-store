import Link from 'next/link';
import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.primary};
`;

export const H4 = styled.h4`
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  font-family: 'Hind', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
`;

/*=============================================
=        Enter Email Components Styled        =
=============================================*/

export const EmailWrapper = styled.div``;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0px 12px;
  line-height: 2.5;
  width: 100%;
  background: #ffffff;
  border-color: #ffffff;
  border-top-left-radius: 6px;
  font-size: 16px;
  border-bottom-left-radius: 6px;
`;

export const Button = styled.button`
  width: 15%;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.black};
  line-height: 3;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  text-transform: uppercase;
  cursor: pointer;
`;

/*=====  End of Enter Email Components Styled  ======*/

/*=============================================
=            Social Icons Styleed            =
=============================================*/

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  height: 100%;
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  display: inline-block;
  margin-right: 1.5rem;
  &:last-child {
    margin: 0;
  }
`;

export const IconLink = styled(Link)`
  transition: all 0.5s;
  &:hover {
    i {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export const Icon = styled.i`
  color: #fff;
`;

/*=====  End of Social Icons Styleed  ======*/
