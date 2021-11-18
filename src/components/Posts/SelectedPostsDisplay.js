import React from 'react';
import PropTypes from 'prop-types';
import {
  SelectedPostTitle,
  TitleTD,
  AuthorTD,
  SelectedPost,
} from './PostsStyle';

const SelectedPostDisplay = ({
  title, score, upvoteRatio, fullLink, author,
}) => (
  <SelectedPost>
    <TitleTD>
      <SelectedPostTitle href={fullLink}>{title}</SelectedPostTitle>
    </TitleTD>
    <td>
      {score}
    </td>
    <td>
      {upvoteRatio}
    </td>
    <AuthorTD>
      {author}
    </AuthorTD>

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
