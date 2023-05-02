import styled from "styled-components";

export const Contetn = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
`;

interface PropsTypes {
    isHovered: boolean
}

export const CenteredText = styled.div<PropsTypes>`
  background: #ffffffd9;
  padding: ${(props) => props.isHovered ?'2.5rem 3rem' : '1.5rem 2rem'} ;
  border-radius: 10px;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
`;

export const H4 = styled.h4`
 font-size: 16px;
    line-height: 26px;
    font-weight: 500;

`;

export const H3 = styled.h3`
   font-size: 24px;
    line-height: 30px;
    font-weight: 500;

`;

export const Span = styled.span`
color: ${({theme}) => theme.colors.primary};
`