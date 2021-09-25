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
  margin: 1.625rem 0 0;
  line-height: 46px;
  letter-spacing: .9px;
  font-style: normal;
font-weight: normal;
  /* ${(props) => props.theme.font.size.headline}; */
`;
const SubmitSubredditSearch = styled(Link)`
  background: rgba(253,183,85,1);
  border:none;
  letter-spacing: .07px;
  margin: 2.6875rem 0 0; 
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};
  width:13.5625rem;
  
  padding: 0.375rem 0;
`;
const SubredditText = styled.p`
  margin: 2.625rem 0  0 0;
`;
const SubText = styled.p`
  margin:1rem 0 0;
  `;
const Search = () => {
  const [subredditInput] = useState('javascript');
  return (
    <SearchContainer>
      <Headline>No reactions to your reddit posts?</Headline>
      <SubText>Great timing, great results! Find the best time to post on your subreddit.</SubText>
      <SubmitSubredditSearch to="/search/javascript">SHOW ME THE BEST TIME</SubmitSubredditSearch>
      <SubredditText>r/javascript</SubredditText>
      <Table subreddit={subredditInput} />
    </SearchContainer>
  );
};

export default Search;
