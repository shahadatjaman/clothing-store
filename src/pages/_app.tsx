import '@/styles/globals.css';
import SCProvider from '@/theme/SCTheme';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/Global.styles';
import MuiProvider from '@/theme/mui/MuiTheme';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-multi-carousel/lib/styles.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SCProvider>
      <GlobalStyle />
      <MuiProvider>
        <Component {...pageProps} />
      </MuiProvider>
    </SCProvider>
  );
}
