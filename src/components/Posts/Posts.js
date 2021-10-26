import React from 'react';
import PropTypes from 'prop-types';
import {
  PostsContainer, PostsHeader,
  TitleHeadEntry,
} from './PostsStyle';
import SelectedPostDisplay from './SelectedPostsDisplay';

const Posts = ({ selectedPosts }) => {
  if (!selectedPosts) { return null; }
  return (
    <PostsContainer>
      <PostsHeader>
        <TitleHeadEntry>Title</TitleHeadEntry>
        <TitleHeadEntry>Score</TitleHeadEntry>
        <TitleHeadEntry>Upvote Ratio</TitleHeadEntry>
        <TitleHeadEntry>Author</TitleHeadEntry>
      </PostsHeader>
      {selectedPosts.map((post) => (
        <SelectedPostDisplay
          title={post.title}
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
