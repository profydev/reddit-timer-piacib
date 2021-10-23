import React from 'react';
import sign from './media/sign.svg';
import {
  StyledFooterSVG,
  StyledFooterSVGLink,
  StyledFooterLink,
  FooterContainer,
} from './FooterStyles';

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
    <StyledFooterLink data-testid="terms-and-privacy" to="/terms">
      Terms & Privacy
    </StyledFooterLink>
  </FooterContainer>
);
export default Footer;
