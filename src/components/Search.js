import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Table from './Table';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
align-items: center`;
const Headline = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-size: 38px; 
  line-height: 46px;
  letter-spacing: .9px;
  font-style: normal;
font-weight: normal;
  /* ${(props) => props.theme.font.size.headline}; */
`;
const SubmitSubredditSearch = styled(Link)`
  background: rgba(253,183,85,1);
  border:none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};
  width:13.5625rem;
  
  padding: 10px 0;
`;
const Search = () => {
  const [subredditInput] = useState('javascript');
  return (
    <SearchContainer>
      <Headline>No reactions to your reddit posts?</Headline>
      <h3>Great timing, great results! Find the best time to post on your subreddit.</h3>
      <SubmitSubredditSearch to="/search/javascript">SHOW ME THE BEST TIME</SubmitSubredditSearch>
      <p>r/javascript</p>
      <Table subreddit={subredditInput} />
    </SearchContainer>
  );
};

export default Search;
