import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import QRSizeContext from '../context/Context';
import { useState } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const small_example_size = 4;
  const [ example_size, setExampleSize ] = useState(small_example_size);
  const value = { example_size, setExampleSize };

  return (
        <Layout>
          <Head>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
          </Head>
         <main>
          <QRSizeContext.Provider value={value}>
            <Component {...pageProps} />
          </QRSizeContext.Provider>
        </main>
        </Layout>
     
)};

export default MyApp;
