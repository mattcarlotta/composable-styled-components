import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  html,body,#__next {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: 15px;
    font-family: sans-serif;
    min-height: 100vh;
    background-color: #ebebeb;
  }

  .link {
    color: #0088ff;
    white-space: nowrap;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      color: #03a9f3;
      text-decoration: underline;
    }

    &:focus {
      color: #0088ff;
      outline: none;
      border: 0;
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    background: #ccc;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  ::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 10px;
    border: 2px solid #ccc;

    &:hover {
      background: #555;
    }
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
