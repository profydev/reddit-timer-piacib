import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <Link to="/search">Search</Link>
    <Link to="/search">How to</Link>
    <Link to="/search">About</Link>
  </div>
);

export default Header;
