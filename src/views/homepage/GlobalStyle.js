import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    user-select: none;
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
  @font-face {
    font-family: "Noto_Sans_Bold"; 
    src: url('./font/NotoSans-Bold.woff2') format('woff2'),
      url('./font/NotoSans-Bold.woff') format('woff');
      url("./font/NotoSans-Bold.ttf") format('ttf');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }
  @font-face {
    font-family: "Noto_SansKR_Bold"; 
    src: url("./font/NotoSansKR-Bold.otf");
  }

`;

export default GlobalStyle;