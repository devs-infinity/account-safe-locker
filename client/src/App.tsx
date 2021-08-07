import React from "react";
import { createGlobalStyle } from "styled-components";

const App: React.FC = () => {
  const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    background-color: #1e1e1e;
    color: #e0e0e0;
  }
`;

  return (
    <div>
      <h1>Hello World!</h1>
      <GlobalStyle />
    </div>
  );
};

export default App;
