import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectedPostTitle,
  SelectedPostAttribute,
  SelectedPost,
} from './SelectedPostsDisplay.styles';

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
