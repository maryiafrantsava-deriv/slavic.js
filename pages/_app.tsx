import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import QRContext from '../context/QRContext';
import AddContext from '../context/AddContext';
import { useState } from 'react';
import { init_aditional_checked, default_example_size } from "../utils/values_form_qr";
import Background from '../components/Background';

const MyApp = ({ Component, pageProps }: AppProps) => {
    let saved_size;
    let saved_fields;

    if(typeof window !== "undefined") {
        saved_size = parseInt(localStorage.getItem('example_size')!);
        saved_fields = JSON.parse(localStorage.getItem('add_fields')!)
     }

    const qr_size = saved_size || default_example_size;
    const enabled_fields = saved_fields || init_aditional_checked;
    const [ example_size, setExampleSize ] = useState(qr_size);
    const [ additional_fields, setAdditionalFields ] = useState(enabled_fields);
    const value = { example_size, setExampleSize };
    const add_value = { additional_fields, setAdditionalFields };

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
          <Background/>
      </Layout>
  );};

export default MyApp;
