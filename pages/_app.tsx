import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import QRContext from '../context/QRContext';
import AddContext from '../context/AddContext';
import { useState } from 'react';
import { init_aditional_checked } from "../utils/values_form_qr";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const small_example_size = 4;
  const [ example_size, setExampleSize ] = useState(small_example_size);
  const [ additional_fields, setAdditionalFields ] = useState(init_aditional_checked);
  
  const value = { example_size, setExampleSize };
  const add_value = {additional_fields, setAdditionalFields};

  return (
      <Layout>
          <Head>
              <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
          </Head>
          <main>
              <QRContext.Provider value={value}>
                  <AddContext.Provider value={add_value}>
                      <Component {...pageProps} />
                  </AddContext.Provider>
              </QRContext.Provider>
          </main>
      </Layout>
  );};

export default MyApp;
