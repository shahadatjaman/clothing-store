import styled from "styled-components";


export const HeaderWrapper = styled.div`
   @media (max-width: 1024px) {
    border-bottom: 1px solid #e9e7e7;
   }
`;

export const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 0;
`;



/*=============================================
=       The Left Content  Elements Styled     =
=============================================*/

export const LeftContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1024px) {
    display: none;
  }
`;

// Header Logo
export const LogoArea = styled.div`
  cursor: pointer;
`;


//Header Search Bar
export const SearchBar = styled.div`
  width: 75%;
 
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid #e9e7e7;
  border-radius: 6px;
`;

export const SeachIcon = styled.span`
  svg{
    font-size: 20px;
    color: ${({theme}) => theme.colors.gray};
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0.4rem;
`;

export const SearchInput = styled.input`
  border: none;
  color: ${({theme}) => theme.colors.gray};
  width: 100%;
`;

export const SearchButton = styled.button`
  border: none;
  background: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.white};
  padding: 10px 20px;
  border-radius: 0px 6px 6px 0px;
  font-weight: 600;
  font-size: 12px;
  text-transform: uppercase;
`;

/*=====  End of The Left Content  Elements Styled   ======*/



/*=============================================
=        The Right Content  Elements Styled   =
=============================================*/

export const RightContent = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   svg{
    font-size: 18px;
    margin-right: 0.5rem;
    color: ${({theme}) => theme.colors.primary};
   }
   @media (max-width: 1024px) {
    width: 100%;
  }
`;


/*=====  End of The Right Content  Elements Styled      ======*/




