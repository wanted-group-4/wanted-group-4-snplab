import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset} 
  * {
    box-sizing: border-box;
    outline: none;
    border: none;
  }
  body {
    color: #272727;
    background-color:#fff;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
