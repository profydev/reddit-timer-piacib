import React, { useState } from 'react';
import logo from './media/logo.svg';
import { StyledHeaderSVG, HeaderContainer } from './Header.styles';
import Burger from './Burger/Burger';

const pages = [
  {
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
  },
];
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

export default Header;
