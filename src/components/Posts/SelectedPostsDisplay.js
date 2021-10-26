import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SelectedPostTitle = styled.a`
  max-width: 700px;
  overflow: hidden;
  white-space: pre-wrap;
`;
const SelectedPostAttribute = styled.div``;
const SelectedPost = styled.div`
  border: 1px solid black;
  max-width: 700px;
`;
const SelectedPostDisplay = ({
  title, score, upvoteRatio, fullLink, author,
}) => (
  <SelectedPost>
    <SelectedPostTitle href={fullLink}>{title}</SelectedPostTitle>
    <SelectedPostAttribute>
      Score:
      {score}
    </SelectedPostAttribute>
    <SelectedPostAttribute>
      Upvote Ratio:
      {upvoteRatio}
    </SelectedPostAttribute>
    <SelectedPostAttribute>
      Author:
      {author}
    </SelectedPostAttribute>
  </SelectedPost>
);

SelectedPostDisplay.propTypes = {
  title: PropTypes.string,
  score: PropTypes.number,
  upvoteRatio: PropTypes.number,
  fullLink: PropTypes.string,
  author: PropTypes.string,
};
SelectedPostDisplay.defaultProps = {
  title: '',
  score: 0,
  upvoteRatio: 0,
  fullLink: '',
  author: '',
};
export default SelectedPostDisplay;
