import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background : #ffffff;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
  font-family : ${(props) => props.theme.fontFamily.hind}
  }
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
