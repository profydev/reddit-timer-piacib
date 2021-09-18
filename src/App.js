import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/search">Search</Route>
          <Route path="/">
            Home
          </Route>
          <Route>404 - Not Found</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
