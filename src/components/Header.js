import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../logo.svg';

const StyledNavLink = styled(Link)`
    padding:1px 0 0 1.5625em;
    white-space: nowrap;
`;
const StyledFirstNavLink = styled(StyledNavLink)`
    justify-content: center;
    display:flex;
    `;
const StyledHeaderSVG = styled(StyledNavLink)`
    margin-right: auto;
    padding:0 1.5625em 2px 1px;
    justify-content: center;
    display:flex;
`;
const HeaderContainer = styled.header`
  display: flex;
  flex-direction:row;
  align-items: center;
  height: ${(props) => props.theme.containerSizes.headerHeight};
  padding: 0 5em;
`;

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
