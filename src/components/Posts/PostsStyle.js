import styled from 'styled-components';

export const PostsContainer = styled.table`
  width:800px;
  border:1px solid black;
  border-collapse:collapse;
  margin-top: 2rem;
  @media (max-width: 900px) {
    width: 80vw;
  }
`;
const TR = styled.tr`
text-align:center;
 > :first-child {
        padding-left: .5rem;
        text-align: start;
    }`;
export const PostsHeader = styled(TR)`
    width:100%;
    background:grey;
    color:white;
    @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {    
    width: 300px;
    height: 4rem;
    }
  
`;
export const SelectedPost = styled(TR)`
  border: 1px solid black;
  width: 100%;
  height:1rem;
`;
export const SelectedPostTitle = styled.a`
  height: 1rem;
`;
export const EllipsisTD = styled.td`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const TitleTD = styled(EllipsisTD)`
  max-width:400px;
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {    
   max-width:200px;
  }
  @media (max-width: 400px) {    
   max-width:130px;
  }
`;
export const AuthorTD = styled(EllipsisTD)`
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {    
   max-width:50px;
  }
`;
