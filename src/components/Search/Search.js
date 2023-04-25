import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Table from '../Table/Table';
import {
  SearchContainer,
  Headline,
  SubmitSubredditSearch,
  SubredditInput,
  SubText,
  SubredditInputContainer,
  SubredditInputLabel,
} from './Search.styles';

const Search = () => {
  const { subreddit } = useParams();
  const [searchParam, setSearchParam] = useState('javascript');
  const page = subreddit ? false : 'readOnly';
  const handleChange = (e) => {
    setSearchParam(e.target.value);
  };
  return (
    <SearchContainer>
      <Headline>No reactions to your reddit posts?</Headline>
      <SubText>Great timing, great results! Find the best time to post on your subreddit.</SubText>
      <SubmitSubredditSearch to={`/search/${searchParam}`}>
        SHOW ME THE BEST TIME
      </SubmitSubredditSearch>
      <SubredditInputContainer>
        <SubredditInputLabel id="subreddit-input-label">r/</SubredditInputLabel>
        <SubredditInput
          aria-labelledby="subreddit-input-label"
          type="text"
          value={searchParam}
          readOnly={page}
          onChange={handleChange}
        />
      </SubredditInputContainer>
      <Table subreddit={subreddit} />
    </SearchContainer>
  );
};

export default Search;
