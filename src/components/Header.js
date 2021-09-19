import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction:row;
  align-items: center;
  padding: 2em 5em;
  a {
    text-align: center;
    text-decoration: none;
    color: rgba(99, 99, 99, 1);
    padding-top:1px;
  }
  a:nth-of-type(1) {
    margin-right: auto;
    padding-right: 1.5625em;
    justify-content: center;
    display:flex;
  }
  a:nth-of-type(3) {
    padding:1px 1.5625em 0;
    white-space: nowrap;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Link to="/">
      <img src={logo} alt="reddit timer logo" />
    </Link>
    <Link to="/search">Search</Link>
    <Link to="/#how-it-works">How it works</Link>
    <Link to="/#about">About</Link>
  </HeaderContainer>
);

export default Header;
