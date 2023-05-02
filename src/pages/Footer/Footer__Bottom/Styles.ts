import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({theme}) => theme.colors.white};
  padding: 10px 0px;
`;



/*=============================================
=            Left Component Styled            =
=============================================*/

export const LeftContentWrapper = styled.div`
 display: flex;
 justify-content: start;
 align-items: center;
`

export const Logo = styled.div`
 margin-right: 1rem;
 cursor: pointer;
`;

export const Text = styled.p`
 font-size: 14px;
 color: #888888;
`;

/*=====  End of Left Component Styled  ======*/



/*=============================================
=            Right Content Styled            =
=============================================*/

export const RightContentWrapper = styled.div`
 display: flex;
 justify-content: end;
 align-items: center;
`

export const Ul = styled.ul`
    margin-top: 14px;
    padding-bottom: 10px;
`;

export const Li = styled.li`
 display: inline-block;
 margin-left: 12px;

`;




/*=====  End of Right Content Styled  ======*/

