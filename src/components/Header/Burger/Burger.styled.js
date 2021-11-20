import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Menu = styled.div`
  @media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
    display: ${({ open }) => (open ? 'flex' : 'none')};
    position: absolute;
    top: 2rem;
    right: .3rem;
    flex-direction: column;
    align-items: flex-end;
    :nth-child(1) {
      justify-content: center;
      display: flex;
    }
  }
`;
export const MenuItems = styled(Link)`
 padding: 1px 0 0 1.5625em;
  white-space: nowrap;
  :hover {
    text-decoration: underline;
  }
  `;
export const StyledBurger = styled.button`
display:none;
@media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    background-color: black;
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => (open ? theme.primaryDark : theme.primaryLight)};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
}
`;
export const BurgerMenuContainer = styled.div`
@media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
    display: flex;
    flex-direction: column;
  }
  position: relative;
`;
