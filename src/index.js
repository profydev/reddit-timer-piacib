import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './normalize.css';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'),
);
