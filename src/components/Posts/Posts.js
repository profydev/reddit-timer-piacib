import React from 'react';
import PropTypes from 'prop-types';
import {
  PostsContainer, PostsHeader,
} from './PostsStyle';
import SelectedPostDisplay from './SelectedPostsDisplay';

const Posts = ({ selectedPosts }) => {
  if (!selectedPosts.length) {
    return (
      <></>
    );
  }
  return (
    <PostsContainer>
      <PostsHeader>
        <th>Title</th>
        <th>Score</th>
        <th>Upvote Ratio</th>
        <th>Author</th>
      </PostsHeader>
      {selectedPosts.map((post) => (
        <SelectedPostDisplay
          title={post.title}
          key={post.title}
          score={post.score}
          upvoteRatio={post.upvote_ratio}
          fullLink={post.full_link}
          author={post.author}
        />
      ))}
    </PostsContainer>
  );
};
Posts.propTypes = {
  selectedPosts: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number,
    title: PropTypes.string,
    upvote_ratio: PropTypes.number,
    full_link: PropTypes.string,
    author: PropTypes.string,
    created_utc: PropTypes.number,
    created_day: PropTypes.number,
    created_hour: PropTypes.number,
  })).isRequired,
};

export default Posts;
