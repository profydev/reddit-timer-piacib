import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Table from '../Table/Table';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Headline = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-size: 38px;
  margin: 1.625rem 0 0;
  line-height: 46px;
  letter-spacing: 0.9px;
  font-style: normal;
  font-weight: normal;
  /* ${(props) => props.theme.font.size.headline}; */
`;
const SubmitSubredditSearch = styled(Link)`
  background: rgba(253, 183, 85, 1);
  border: none;
  letter-spacing: 0.07px;
  margin: 2.6875rem 0 0;
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};
  width: ${(props) => props.theme.showBestResults.width};
  padding: 0.375rem 0;
`;
const SubredditInput = styled.input`
  border: none;
  font-family: 'Montserrat', sans-serif;

  width: ${(props) => `calc(${props.theme.showBestResults.width} / 2 )`};
  &:focus {
    outline: ${(props) => (props.readOnly ? 'none' : 'default')};
  }
`;
const SubText = styled.p`
  margin: 1rem 0 0;
`;
const SubredditInputContainer = styled.div`
  margin: 2.625rem 0 0;
  display: flex;
  justify-content: center;
  overflow: visible;
  width: ${(props) => props.theme.showBestResults.width};
`;
const SubredditInputLabel = styled.label`
  padding-left: 2rem;
  text-align: end;
`;
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
