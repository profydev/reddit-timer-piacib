import React from 'react';
import styled from 'styled-components';

const Info = styled.div`
`;
const InfoContainer = styled.div`
max-width:738px;
margin: 133px auto 96px auto;
${Info}:first-child{
  margin-bottom:100px;
}
`;
const InfoTitle = styled.h3`
color: ${(props) => props.theme.color.dark};
font-size: 1.5rem;
letter-spacing: 0;
margin-bottom:5px;
`;
const InfoList = styled.ul`
  margin:0;
  margin-bottom:0;
  padding:0;
  list-style:none;
  li:before{ content:"• ";}
    li {
  letter-spacing: 0;
    }
`;
const InfoText = styled.p` margin:0`;

const AboutText = styled(InfoText)`
/* text-align: justify; */
`;
const AboutTitle = styled(InfoTitle)`
margin-bottom: 7px;
`;
const HyperLink = styled.a`
color: blue;
:before {
    content: ' ';
}
:after {
    content: ' ';
}`;
const InfoSection = () => (
  <InfoContainer>
    <Info>
      <InfoTitle>
        How it works
      </InfoTitle>
      <InfoList>
        <li>
          We find the 500 top posts from the past year for a subreddit.
        </li>
        <li>
          The data is visualized in a heatmap grouped by weekday and hour of the day.
        </li>
        <li>
          See immediately when to submit your reddit post.
        </li>
      </InfoList>
    </Info>
    <Info>
      <AboutTitle>
        About
      </AboutTitle>
      <AboutText>
        This app was created during a course on
        <HyperLink>
          profy.dev
        </HyperLink>
        with the
        goal to implement a pixel-perfect real-world application with
        professional workflows and tools like Kanban, Asana, Zeplin,
        GitHub, pull requests and code reviews.
        <HyperLink>
          Click here for more
          information.
        </HyperLink>
      </AboutText>
    </Info>
  </InfoContainer>
);
export default InfoSection;
