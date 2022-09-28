import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    cursor: none;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
  }

  @font-face {
    font-family: "Noto_Sans"; 
    src: url("./font/NotoSans-Light.ttf");
  }
  @font-face {
    font-family: "Noto_SansKR"; 
    src: url("./font/NotoSansKR-Light.otf");
  }

`;

export default GlobalStyle;