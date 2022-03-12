import React from 'react';
import {
  Info,
  InfoContainer,
  InfoTitle,
  InfoList,
  InfoBulletPoint,
  AboutText,
  AboutTitle,
  HyperLink,
} from './InfoSection.style';

const InfoSection = () => (
  <InfoContainer>
    <Info>
      <InfoTitle>How it works</InfoTitle>
      <InfoList>
        <InfoBulletPoint>
          We find the 500 top posts from the past year for a subreddit.
        </InfoBulletPoint>
        <InfoBulletPoint>
          The data is visualized in a heatmap grouped by weekday and hour of the day.
        </InfoBulletPoint>
        <InfoBulletPoint>See immediately when to submit your reddit post.</InfoBulletPoint>
      </InfoList>
    </Info>
    <Info>
      <AboutTitle>About</AboutTitle>
      <AboutText>
        This app was created during a course on
        <HyperLink>profy.dev</HyperLink>
        with the goal to implement a pixel-perfect real-world application with professional
        workflows and tools like Kanban, Asana, Zeplin, GitHub, pull requests and code reviews.
        <HyperLink>Click here for more information.</HyperLink>
      </AboutText>
    </Info>
  </InfoContainer>
);
export default InfoSection;
