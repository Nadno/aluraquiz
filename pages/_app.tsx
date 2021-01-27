import { createGlobalStyle, StyledProps, ThemeProvider } from "styled-components";

import db from '../db.json';


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html, body {
    min-height: 100vh;
    width: 100vw;
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
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component { ...pageProps } />
      </ThemeProvider>
    </>
  );
};