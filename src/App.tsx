import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from '@routes/Router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '@styles/GlobalStyle';
import theme from '@styles/theme';

import { QueryClient, QueryClientProvider } from 'react-query';

export default function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
