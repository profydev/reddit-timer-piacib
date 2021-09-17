import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@400;500&family=Montserrat:wght@400;500&display=swap');
    h1, h2, h3 {
    font-family: 'Bitter', serif;
    font-weight: 400;
    }
    p, a, button {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;

    }
`;
export default GlobalStyle;
