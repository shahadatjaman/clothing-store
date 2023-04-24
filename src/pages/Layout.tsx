import Head from 'next/head';

import Footer from './Footer';
import Header from './Header';

function Layout(props: any) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles.css" media="print" />
        <noscript>
          <link rel="stylesheet" href="/styles.css" />
        </noscript>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
