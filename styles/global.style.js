import css from "styled-jsx/css"

export default css.global`
  html,
  body {
    padding: 0;
    margin: 0;
  }

  * {
    outline: 0 !important;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    font-size: 62.5%;
    font-family: "Public Sans", sans-serif;
    font-weight: 300;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background: #20272f !important;
    /* background: radial-gradient(110.62% 196.67% at 81.41% 9.17%, rgba(150, 205, 255, 0.19) 0%, rgba(28, 32, 38, 0.2) 100%),
      #101112 !important; */
    margin: 0;
  }

  /*
   * Remove outline on click / focus
   */

  button:focus {
    outline: 0;
  }

  /*
   * Remove the white border on lazyload
   */

  img:not([src]) {
    visibility: hidden;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  input::-webkit-inner-spin-button,
  input::-webkit-clear-button {
    display: none;
  }

  input::-webkit-calendar-picker-indicator {
    width: 1rem;
    height: 1rem;
  }

  input::-webkit-calendar-picker-indicator:hover {
    background: rgba(0, 0, 0, 0);
    opacity: 1;
  }

  /* mobile Styles */

  @media screen and (min-width: 299px) and (max-width: 640px) {
    html {
      font-size: 62.5%;
    }
  }

  /* big window Styles */

  @media screen and (min-height: 1079px) and (max-height: 1439px) {
    html {
      font-size: 82.5%;
    }
  }

  /* Ipad Pro portrait */

  @media screen and (max-height: 1366px) and (orientation: portrait) {
    html {
      font-size: 62.5%;
    }
  }

  /* Mac Styles */

  @media screen and (min-height: 1440px) and (max-height: 1800px) {
    html {
      font-size: 107.25%;
    }
  }

  /* Big TV Styles */

  @media screen and (min-height: 1801px) {
    html {
      font-size: 167.5%;
    }
  }
`
