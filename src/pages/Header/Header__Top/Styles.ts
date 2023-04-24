import styled from "styled-components";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import Link from "next/link";


export const TopHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({theme}) =>  theme.colors.black};
  min-height: 40px;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
      flex-direction: column;
    }
`;


/* Git Icon */

export const Gift = styled(CardGiftcardIcon)`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  margin-right: 0.5rem;
`;



/*=============================================
=            Left Content                     =
=============================================*/
export const Left = styled.div``;

export const LeftInfo = styled.div`
  line-height: 22px;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const Ul = styled.ul``;

export const Li = styled.li`
  color: ${({theme}) => theme.colors.gray};
  font-size: 13px;
  font-weight: 100;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LinkStyled = styled(Link)`
  color: ${({theme}) => theme.colors.primary};
  text-decoration: underline;
`;

/*=====  End of Left Content  ======*/



/*=============================================
=            Right Content                    =
=============================================*/

export const Right = styled.div`
 color: #fff;
`;
export const RightInfo = styled.div``;

export const SocailItems = styled.ul`
  display: flex;
`;

export const SocialItem = styled.li`
  margin-left: 1.5rem;
  &:last-child{
    margin-right: 0;
  }
  &:first-child{
    margin-left: 0;
  }
  a{
    svg{
      color: ${({theme}) => theme.colors.gray};
    }
  }
  &:hover{
    transition: all .5s;
    a {
      svg{
        color: ${({theme}) => theme.colors.white};
      }
    }
  }
`;

/*=====  End of Right Content  ======*/




