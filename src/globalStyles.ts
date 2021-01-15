import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
  }
  
  body {
    width: 1400px;
    margin: 0 auto;
    padding: 20px;
  }
`;
