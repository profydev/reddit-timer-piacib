import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(Link)`
  padding: 1px 0 0 1.5625em;
  white-space: nowrap;
`;
export const StyledFirstNavLink = styled(StyledNavLink)`
  justify-content: center;
  display: flex;
`;
export const StyledHeaderSVG = styled(StyledNavLink)`
  margin-right: auto;
  padding: 0 1.5625em 2px 1px;
  justify-content: center;
  display: flex;
`;
export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${(props) => props.theme.containerSizes.headerHeight};
  padding: 0 5em;
<<<<<<< HEAD
=======
  @media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
  padding: 0 1em 2em;
  }
>>>>>>> main
`;
