// src/styles/GlobalStyle.ts

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f6f8;
    color: #333;
    line-height: 1.6;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    margin-bottom: 1rem;
  }
`;

export default GlobalStyle;

