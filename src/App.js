import React from 'react';
import { Route, Switch, HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import theme from './theme';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/search/:subreddit">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/reddit-timer-piacib">
            <HomePage />
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
