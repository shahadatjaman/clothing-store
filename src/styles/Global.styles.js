import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background : #ffffff;
  }
*{
     font-family : ${(props) => props.theme.fontFamily.hind}
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button.Styles__Button-sc-15r0ui4-2.ebCBww {
    left: 2%;
  }
  button.Styles__Button-sc-15r0ui4-2.jImDrA {
    right: 2%;
  }
  .mx-1{
    margin-right:1rem;
    /* &:last-child{
      margin: 0;
    } */
  }

  h1,h2, h3, h4, h5, h6{
    font-family : ${(props) => props.theme.fontFamily.hind}
  }

  button.Styles__Button-sc-15r0ui4-2.gkjyVG.left-right{
    margin-left: 1rem;
    &:last-child{
      right: 0;
      margin-right: 1rem;
    }
  }
 
`;
