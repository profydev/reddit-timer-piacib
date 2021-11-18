import React from 'react';
import {
  bool, func, string, arrayOf, shape,
} from 'prop-types';
import {
  BurgerMenuContainer, Menu, MenuItems, StyledBurger,
} from './Burger.styled';
// Burger menu component that accepts a list of
// {displayName, href} objects and converts it to a
// menu of react-router-dom links
const Burger = ({ open, setOpen, menuList }) => {
  const isExpanded = !!open;

  return (
    <BurgerMenuContainer>
      <StyledBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <Menu open={open}>
        {menuList.map((item) => (
          <MenuItems key={item.displayName} to={item.href}>
            {item.displayName}
          </MenuItems>
        ))}
      </Menu>
    </BurgerMenuContainer>
  );
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
  menuList: arrayOf(shape({
    displayName: string,
    href: string,
  })).isRequired,
};

export default Burger;
