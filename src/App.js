import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import theme from './theme';
import Header from './components/Header';
import Footer from './components/Footer';

const ContentContainer = styled.div``;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ContentContainer>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
