import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: "Amoreiza";
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
    src: url('/Amoreiza.eot?#iefix') format('embedded-opentype'),
         url("/Amoreiza.otf") format("opentype"),
         url("/Amoreiza.ttf") format("truetype"),
         url("/Amoreiza.woff2") format("woff2"),
         url("/Amoreiza.woff") format("woff");
  }
 

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
    background: #ebebeb;
  }

  .link {
    color: #0088ff;
    white-space: nowrap;
    text-decoration: none;
    transition: all 200ms ease-in-out;
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

  .algolia-autocomplete
  .ds-dropdown-menu
  .ds-suggestion
  .algolia-docsearch-suggestion--content {
    width: 100% !important;
    &::before {
      content: none;
    }
  }
  .algolia-autocomplete
    .ds-dropdown-menu
    .ds-suggestion.ds-cursor
    .algolia-docsearch-suggestion--content {
    background: #282a36 !important;
  }
  /* Main category (eg. Getting Started) */
  .algolia-autocomplete .algolia-docsearch-suggestion--category-header {
    color: #282a36;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {
    display: none !important;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--title {
    font-weight: bold;
    color: black;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--text {
    color: #282a36;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {
    box-shadow: none !important;
    color: rgb(33, 33, 33) !important;
    background: transparent !important;
  }
  .algolia-autocomplete .ds-dropdown-menu {
    margin-top: 0;
    > *:first-child {
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
