/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Head from 'next/head';
import {
  createGlobalStyle,
  StyledProps,
  ThemeProvider,
} from 'styled-components';

import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
  }

  body {
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    width: 100%;
    max-width: 100vw;
    min-height: 100vh;
  }
  
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const theme = db.theme.default;

export default function App({ Component, pageProps }: StyledProps<any>) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
