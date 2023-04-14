import { Typography } from '@material-ui/core';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

function Layout(props: any) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" media="print" />
        <noscript>
          <link rel="stylesheet" href="/styles.css" />
        </noscript>
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
