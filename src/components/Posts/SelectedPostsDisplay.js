import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectedPostTitle,
  SelectedPostAttribute,
  SelectedPost,
  TitleContainer, TD,
} from './PostsStyle';

const SelectedPostDisplay = ({
  title, score, upvoteRatio, fullLink, author,
}) => (
  <SelectedPost>
    <TD>
      <TitleContainer>
        <SelectedPostTitle href={fullLink}>{title}</SelectedPostTitle>
      </TitleContainer>
    </TD>
    <TD>
      <SelectedPostAttribute>
        {score}
      </SelectedPostAttribute>
    </TD>
    <TD>
      <SelectedPostAttribute>
        {upvoteRatio}
      </SelectedPostAttribute>
    </TD>
    <TD>
      <SelectedPostAttribute>
        {author}
      </SelectedPostAttribute>
    </TD>

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
