import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  html,
  body {
    font-family: 'Poppins', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
    .cls-1 {
        fill: #000;
      }

      .cls-2 {
        fill: #0090ff !important;
      }
`

export default Global