import styled from 'styled-components';

export const Info = styled.div`
`;
export const InfoContainer = styled.div`
max-width:738px;
margin: 133px auto 96px auto;
${Info}:first-child{
  margin-bottom:100px;
}

padding: 0 15px;
@media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
    ${Info}:first-child{
  margin-bottom:0;
}
margin-top:96px;
}

`;
export const InfoTitle = styled.h3`
color: ${(props) => props.theme.color.dark};
font-size: 1.5rem;
letter-spacing: 0;
margin-bottom:5px;
@media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
    text-align: center;
}
`;
export const InfoList = styled.ul`
  margin:0;
  margin-bottom:0;
  padding:0;
  list-style:none;

`;
export const InfoBulletPoint = styled.li`
:before{ content:"• ";}
  letter-spacing: 0;
`;
export const AboutText = styled.p`
margin:0;
@media (max-width: ${(props) => props.theme.mobile.menuMinimizeWidth}) {    
    margin: 15px;
}
`;
export const AboutTitle = styled(InfoTitle)`
margin-bottom: 7px;
`;
export const HyperLink = styled.a`
color: blue;
:before {
    content: ' ';
}
:after {
    content: ' ';
}`;
