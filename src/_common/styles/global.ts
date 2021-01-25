import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #F4F8FA;
    color: #1E2A32;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Work Sans', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
