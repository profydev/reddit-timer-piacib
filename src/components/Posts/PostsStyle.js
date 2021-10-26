import styled from 'styled-components';

export const PostsContainer = styled.table`
  width:700px;
  border:1px solid black;
  border-collapse:collapse;
  margin-top: 2rem;

  /* padding: 2rem; */
  
`;
export const PostsHeader = styled.tr`
    width:100%;
    background:grey;
    ::nth-of-type(1) {
        padding-left: 5rem;
    }
    color:white;
`;
export const TitleHeadEntry = styled.th`
    text-align:start;
    /* padding-right: 1.25rem; */
    /* padding-left: 1rem; */
    white-space:nowrap;

`;
export const SelectedPostTitle = styled.a`
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 1rem;
  padding-left:.5rem;
`;
export const SelectedPostAttribute = styled.div`
  white-space: nowrap;
`;
export const SelectedPost = styled.tr`
  border: 1px solid black;
  width: 100%;
  /* padding: 5px 0; */
`;
export const TitleContainer = styled.div`
  white-space: nowrap;
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TD = styled.td`

`;
