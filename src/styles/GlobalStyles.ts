import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style-type: none;
  } 

  button {
    background-color: white;
    outline: 0;
  }

  button:hover {
    cursor: pointer;
  }

  input, textarea, button {
    font-family: inherit;
    font-size: inherit;
  }
`;
