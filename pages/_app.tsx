import Head from 'next/head';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import type { AppProps } from "next/app";
import QRContext from '../context/QRContext';
import AddContext from '../context/AddContext';
import ThemeContext from '../context/ThemeContext';
import { useState } from 'react';
import { init_aditional_checked, default_example_size, default_theme } from "../utils/values_form_qr";
import Background from '../components/Background';

const MyApp = ({ Component, pageProps }: AppProps) => {
    let saved_size;
    let saved_fields;
    let saved_theme;

    if(typeof window !== "undefined") {
        saved_size = parseInt(localStorage.getItem('example_size')!);
        saved_fields = JSON.parse(localStorage.getItem('add_fields')!);
        saved_theme = localStorage.getItem('theme')!;
     }

    const qr_size = saved_size || default_example_size;
    const enabled_fields = saved_fields || init_aditional_checked;
    const theme = saved_theme || default_theme;

    const [ example_size, setExampleSize ] = useState(qr_size);
    const [ additional_fields, setAdditionalFields ] = useState(enabled_fields);
    const [ active_theme, setActiveTheme] = useState(theme);

    const value = { example_size, setExampleSize };
    const add_value = { additional_fields, setAdditionalFields };
    const theme_value = { active_theme, setActiveTheme };

  return (
      <ThemeContext.Provider value={theme_value}>
          <Layout>
              <Head>
                  <link
                      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap"
                      rel="stylesheet"
                  />
              </Head>
              <main>
                  <QRContext.Provider value={value}>
                      <AddContext.Provider value={add_value}>
                          <Component {...pageProps} />
                      </AddContext.Provider>
                  </QRContext.Provider>
              </main>
              <Background />
          </Layout>
      </ThemeContext.Provider>
  );};

export default MyApp;
