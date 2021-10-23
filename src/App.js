import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import theme from './theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const ContentContainer = styled.div`
  width: 100%;
  height: ${(props) => `calc(100vh - ${props.theme.containerSizes.headerHeight} - ${props.theme.containerSizes.footerHeight})`};
  height: fit-content;
  ${'' /* min-height: 800px; */}
`;
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <ContentContainer>
          <Switch>
            <Route exact path="/search/:subreddit">
              <SearchPage />
            </Route>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route>404 - Not Found</Route>
          </Switch>
        </ContentContainer>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
