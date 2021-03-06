import { createGlobalStyle } from "styled-components";

export const theme = {
  maxWidth: "1200px",
};

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    background: #000000;
  }   

  h1{
    color:#fc3d21;
  }

  span {
    color: whitesmoke;
  }
`;
