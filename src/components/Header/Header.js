import React from 'react';
import logo from './media/logo.svg';
import {
  StyledNavLink,
  StyledFirstNavLink,
  StyledHeaderSVG,
  HeaderContainer,
} from './HeaderStyles';

const Header = () => (
  <HeaderContainer>
    <StyledHeaderSVG data-testid="reddit-timer-svg" to="/">
      <img src={logo} alt="reddit timer logo" />
    </StyledHeaderSVG>
    <StyledFirstNavLink to="/search/javascript">Search</StyledFirstNavLink>
    <StyledNavLink to="/#how-it-works">How it works</StyledNavLink>
    <StyledNavLink to="/#about">About</StyledNavLink>
  </HeaderContainer>
);

export default Header;
