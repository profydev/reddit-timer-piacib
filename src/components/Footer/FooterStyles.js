import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledFooterSVG = styled.img`
  display: block;
  margin: 0 auto;
`;
export const StyledFooterSVGLink = styled(Link)`
  margin: 0 auto;
`;
export const StyledFooterLink = styled(Link)`
  text-align: start;
  width: 6.875rem;
`;
export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.small};
  padding: 2em 17.36111%;
  line-height: 1.249;
`;
