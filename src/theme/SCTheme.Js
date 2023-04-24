/* Theme of Styled Components */
import { ThemeProvider } from 'styled-components';
export const theme = {

  /*=============================================
    =            Colors                         =
    =============================================*/

  colors : {
  /* Brand Colors */
  primary: '#2879fe',
  secondary: '#065eef',

  /* Neutral Colors */
   gray: '#777777',
  'grayLight': '#f7f8fa',

  white: '#FFFFFF',
  'white-dark': '#F1F2F3',

  black : '#191919'
  },
  shadow: '0px 0px 10px rgba(0, 0, 0, 0.08)',
  /*=====  End of Colors  ======*/

  /*=============================================
    =            Typography                     =
    =============================================*/
    fontFamily : {
      hind: 'Hind',
     'sansSerif': 'sans-serif',
    },

  /*=====  End of Typography  ======*/
};

const SCProvider = ({children}) => {
  return <ThemeProvider theme={theme
  }>{children}</ThemeProvider>
};

export default SCProvider;