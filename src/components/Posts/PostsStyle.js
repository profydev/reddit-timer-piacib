import styled from 'styled-components';

export const PostsContainer = styled.table`
  width:800px;
  border:1px solid black;
  border-collapse:collapse;
  margin-top: 2rem;
  th:nth-of-type(1) {
        padding-left: .5rem;
    }
`;
export const PostsHeader = styled.tr`
    width:100%;
    background:grey;
    color:white;
`;
export const TitleHeadEntry = styled.th`
    text-align:start;
    white-space:nowrap;
`;
export const SelectedPostTitle = styled.a`
  height: 1rem;
`;
export const SelectedPostAttribute = styled.div`
  white-space: nowrap;
`;
export const SelectedPost = styled.tr`
  border: 1px solid black;
  width: 100%;
  td:nth-of-type(1) {
        padding-left: .5rem;
    }
  
`;
export const TitleContainer = styled.div`
  white-space: nowrap;
  max-width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TD = styled.td`
`;
