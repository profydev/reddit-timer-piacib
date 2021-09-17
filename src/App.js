import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import SearchPage from './pages/SearchPage/SearchPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyle>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </GlobalStyle>
    </Router>
  );
}

export default App;
