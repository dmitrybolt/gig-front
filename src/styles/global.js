import { createGlobalStyle } from "styled-components";
import { SECONDARY, PRIMARY, DARKGRAY, BLACK, GRAY } from "./constants";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "ArcadeClassic";
    src: url("/ArcadeClassic.woff2") format("woff2"),
      url("/ArcadeClassic.woff") format("woff");
    font-weight: bold;
    font-style: normal;
  }

  :root {
    --color-secondary: ${SECONDARY};
    --color-primary: ${PRIMARY};
    --color-gray: ${GRAY};
    --color-darkgray: ${DARKGRAY};
    --color-black: ${BLACK};
  }

  html {
    font-family: "Open Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    color: var(--color-black);
    margin: 0;
    padding: 0;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;