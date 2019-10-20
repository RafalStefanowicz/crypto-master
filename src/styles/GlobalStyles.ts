import { createGlobalStyle } from "styled-components";
import { media } from "./media";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');
  
  * {
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', sans-serif;
    font-size: 18px;

    @media ${media.small} {
    font-size: 14px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  li {
    list-style-type: none;
  } 

  button {
    background-color: white;
    outline: 0;

    :hover {
      cursor: pointer;
    }
    
    :disabled {
      cursor: default;
    }
  }

  input, textarea, button {
    font-family: inherit;
    font-size: inherit;
  }
`;
