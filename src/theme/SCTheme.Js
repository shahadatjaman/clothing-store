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
  gray: '#A3A5AD',
  'grayLight': '#BEBFC4',

  white: '#FFFFFF',
  'white-dark': '#F1F2F3',

  back : '#191919'
  },
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