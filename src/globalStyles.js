import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /** Montserrat Regular **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/Montserrat-Regular.woff2") format("woff2"),
 url("/fonts/Montserrat-Regular.woff") format("woff");
  }

  /** Montserrat Medium **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/Montserrat-Medium.woff2") format("woff2"),
 url("/fonts/Montserrat-Medium.woff") format("woff");
  }

  /** Montserrat SemiBold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/Montserrat-SemiBold.woff2") format("woff2"),
 url("/fonts/Montserrat-SemiBold.woff") format("woff");
  }

  /** Montserrat Bold **/
  @font-face {
    font-family: "Montserrat";
    font-weight: 700;
    font-style: normal;
    src: url("Montserrat-Bold.woff2") format("woff2"),
 url("Montserrat-Bold.woff") format("woff");
  }

  /** Bitter Regular **/
  @font-face {
    font-family: "Bitter";
    src: url("/fonts/Bitter-Regular.woff2") format("woff2"),
 url("/fonts/Bitter-Regular.woff") format("woff");
  }

  body {
    font-family: ${(props) => props.theme.font.family.default};
    font-size: ${(props) => props.theme.font.size.default};
    line-height: ${(props) => props.theme.font.lineHeight.default};
    letter-spacing: ${(props) => props.theme.font.letterSpacing.default};
    color: ${(props) => props.theme.color.text};
    
  }

    h1, h2, h3 {
    font-family: 'Bitter', serif;
    font-weight: 400;
    letter-spacing: ${(props) => props.theme.font.letterSpacing.h1};

    }
    p, a, button, input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    }
    input {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    }
    a {
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    color: rgba(99, 99, 99, 1);
    }
`;
export default GlobalStyle;
