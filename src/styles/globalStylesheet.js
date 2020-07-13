import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,body,#__next {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 14px;
    font-family: sans-serif;
    min-height: 100vh;
  }

  *,
  ::after,
  ::before,
  ::placeholder {
    box-sizing: border-box;
  }
  
  ::-moz-focus-inner {
    border: 0;
  }
`;
