/* Theme of MUI */
import { createTheme } from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import { overWritedButton } from './OverWritenbutton';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2879fe',
        contained: '#2879fe', 
      },
    },
    overrides: {
      MuiButton: {
      ...overWritedButton
      },
    },
  });
  
const MuiProvider = ({children}) => {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>
  };

  export default MuiProvider;