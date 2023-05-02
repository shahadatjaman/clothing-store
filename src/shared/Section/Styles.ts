import styled from 'styled-components';

export const SectionStyled = styled.section`
 padding: 1rem 0;
`;

export const SectionTitle = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 text-transform: uppercase;
 margin: 33px 0;
`;

export const H4 = styled.h4`
   font-size: 22px;
  line-height: 31px;
  font-weight: 500;
  margin: 0;
  padding: 0;

`;

export const H5 = styled.h5`
    font-size: 14px;
    line-height: 24px;
    font-weight: 500;
    font-family: 'Hind', sans-serif;
    color: #191919;
    margin: 2px 0 0 0;
    padding: 0;
`;

export const ColoredText = styled.span`
  color: ${({theme}) => theme.colors.primary};
`;