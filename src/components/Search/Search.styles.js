import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Headline = styled.h1`
  color: ${(props) => props.theme.color.dark};
  font-size: 38px;
  margin: 1.625rem 0 0;
  line-height: 46px;
  letter-spacing: 0.9px;
  font-style: normal;
  text-align: center;
  font-weight: normal;
  /* ${(props) => props.theme.font.size.headline}; */
`;
export const SubmitSubredditSearch = styled(Link)`
  background: rgba(253, 183, 85, 1);
  border: none;
  letter-spacing: 0.07px;
  margin: 2.6875rem 0 0;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  font-size: ${(props) => props.theme.font.size.small};
  color: ${(props) => props.theme.color.light};
  width: ${(props) => props.theme.showBestResults.width};
  padding: 0.375rem 0;
`;
export const SubredditInput = styled.input`
  border: none;
  font-family: 'Montserrat', sans-serif;

  width: ${(props) => `calc(${props.theme.showBestResults.width} / 2 )`};
  &:focus {
    outline: ${(props) => (props.readOnly ? 'none' : 'default')};
  }
`;
export const SubText = styled.p`
  margin: 1rem 0 0;
`;
export const SubredditInputContainer = styled.div`
  margin: 2.625rem 0 0;
  display: flex;
  justify-content: center;
  overflow: visible;
  width: ${(props) => props.theme.showBestResults.width};
`;
export const SubredditInputLabel = styled.label`
  padding-left: 2rem;
  text-align: end;
`;
