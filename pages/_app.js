// pages/_app.js
import React from 'react';
import App from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>ABCD123</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;