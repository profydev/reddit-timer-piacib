<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import logo from './media/logo.svg';
import {
  StyledHeaderSVG,
  HeaderContainer,
} from './HeaderStyles';
import Burger from './Burger/Burger';

const pages = [{
  displayName: 'Search',
  href: '/search/javascript',
},
{
  displayName: 'How it works',
  href: '/#how-it-works',
},
{
  displayName: 'About',
  href: '/#about',
}];
const Header = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  return (
    <HeaderContainer>
      <StyledHeaderSVG data-testid="reddit-timer-svg" to="/">
        <img src={logo} alt="reddit timer logo" />
      </StyledHeaderSVG>
      <Burger open={burgerOpen} setOpen={setBurgerOpen} menuList={pages} />
    </HeaderContainer>
  );
};
>>>>>>> main

export default Header;
