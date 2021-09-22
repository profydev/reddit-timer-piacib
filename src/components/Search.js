import React, { useState } from 'react';
import styled from 'styled-components';
import Table from './Table';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
align-items: center`;
const FormContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Headline = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-size: 38px; 
  line-height: 46px;
  letter-spacing: .9px;
  font-style: normal;
font-weight: normal;
  /* ${(props) => props.theme.font.size.headline}; */
`;
const SubmitSubredditSearch = styled.input`
  background: rgba(253,183,85,1);
  border:none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};
  width:13.5625rem;
  
  padding: 10px 0;
`;
const RLabel = styled.label`
  display:flex;
  flex-direction: row;
  justify-content: center;
  color:${(props) => props.theme.color.text};
  
`;
const SubredditInput = styled.input`border:none;
color:inherit;
width:fit-content;
`;
const Search = () => {
  const [subredditInput, setSubredditInput] = useState('javascript');
  const handleSubredditInputChange = (event) => setSubredditInput(event.target.value);
  const handleSubredditSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <SearchContainer>
      <Headline>No reactions to your reddit posts?</Headline>
      <h3>Great timing, great results! Find the best time to post on your subreddit.</h3>
      <FormContainer onSubmit={handleSubredditSubmit}>
        <SubmitSubredditSearch type="submit" value="SHOW ME THE BEST TIME" />
        <RLabel htmlFor="subreddit">
          r/
          <SubredditInput name="subreddit" value={subredditInput} type="text" onChange={handleSubredditInputChange} />
        </RLabel>
      </FormContainer>
      <Table subreddit=" " />
    </SearchContainer>
  );
};

export default Search;
