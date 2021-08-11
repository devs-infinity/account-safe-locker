import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  //? CSS VARIABLES
  :root {
    //? COLORS
    --white: #f8fefc;
    --black: #000000;
    --light-gray: #E5E5E5;
    --gray: #a4a8a7;
    --navy-blue: #192a3f;
    --blue: #057DCD;
    --ocean-blue: #4eb6fb;

    //? FONT
    --font-main: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;
      
    --font-heading: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
      sans-serif;


    --fz-sm: 14px;  
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;

    //? RIGHT & LEFT PADDING
    --rl-space: 70px;

    --max-width: 1500px;

    --bd-radius: 4px;
    --transition: all 0.25s ease-in-out;
    --nav-height: 100px;
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
    margin: 0 auto;
    font-family: var(--font-main);
    color: var(--black);
    text-align: center;
    max-width: var(--max-width);
  }

  section {
    padding: var(--rl-space);
  }

  a, p {
    font-weight: 500;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    color: var(--navy-blue);
  }

  ul, li, ol {
    list-style: none;
  }

  button {
    font-family: var(--font-main);
    font-size: var(--fz-md);
    cursor: pointer;
    outline: none;
    border: none;
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
