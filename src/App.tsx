import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@routes/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
