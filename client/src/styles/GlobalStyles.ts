import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  //? CSS VARIABLES
  :root {
    //? COLORS
    --white: #f8fefc;
    --black: #000000;
    --gray: #a4a8a7;
    --navy-blue: #192a3f;
    --blue: #057DCD;

    //? FONT
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
    --fz-sm: 14px;  
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;

    --bd-radius: 4px;
    --transition: all 0.2s ease-in-out;
  }

  

  //? GLOBAL STYLES
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  //? SCROLL BAR STYLES
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--navy-blue);
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--navy-blue);
    border-radius: 10px;
  }

  body {
    font-family: var(--font-main);
    text-align: center;
  }

  h1, h2, h3, h4, h5, h6, p, a {
    font-family: var(--font-main);
  }

  ul, li, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: var(--black);
    transition: var(--transition);

    :hover {
      color: var(--blue)
    }
  }

  .link {
    position: relative;

    :hover::after {
      width: 100%;
    }

    ::after {
      position: absolute;
      content: '';
      left: 0;
      bottom: 0;
      height: 2px;
      border-radius: 1px;
      width: 0px;
      background-color: var(--blue);
      transition: var(--transition);
    }
  }

`;
