import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import sign from '../sign.svg';

const StyledFooterSVG = styled.img`
  display: block;
  margin: 0 auto;
`;
const StyledFooterSVGLink = styled(Link)`
  margin: 0 auto;
`;
const StyledFooterLink = styled(Link)`
  text-align: start;
  width: 6.875rem;
`;
const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.font.size.small};
  padding: 2em 17.36111%;
  line-height: 1.249;
`;
const Footer = () => (
  <FooterContainer>
    <StyledFooterLink
      as="a"
      rel="noopener noreferrer"
      target="_blank"
      href="https://profy.dev/employers"
    >
      profy.dev
    </StyledFooterLink>
    <StyledFooterSVGLink to="/">
      <StyledFooterSVG src={sign} alt="reddit magnifying glass" />
    </StyledFooterSVGLink>
    <StyledFooterLink to="/terms">Terms & Privacy</StyledFooterLink>
  </FooterContainer>
);
export default Footer;
