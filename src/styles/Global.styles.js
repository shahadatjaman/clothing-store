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
`;
