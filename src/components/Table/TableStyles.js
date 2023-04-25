import styled from 'styled-components';
import { valueToColor } from './TableFunctions';
// styled components
const tableWidth = '1114px';
export const TableContainer = styled.div`
  max-width: ${tableWidth};
  width: 100%;
  border: none;
  position: relative;
  margin: 2rem 0 ;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  grid-template-columns: ${(props) => props.theme.table.dateContainerWidth} auto;
  grid-template-rows: ${(props) => props.theme.table.tableHeadHeight} auto;
  overflow-x: ${(props) => !props.exampleContainer && 'auto'};
  display: ${(props) => !props.exampleContainer && 'grid'};
`;
export const HeatMapImage = styled.img`
  width:1115px;
  height:333px;
`;

export const TableHead = styled.div`
  height: ${(props) => props.theme.table.tableHeadHeight};
  width:960px;
  background: ${(props) => props.theme.table.tableHeadBackground};
  align-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 2;

`;
export const TimeDisplay = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  width: ${(props) => `calc(2 * ${props.theme.table.boxSize})`};

`;
export const DateContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.theme.table.dateContainerWidth};
  background-color: ${(props) => props.theme.backgroundColor.tableDay};
position:sticky;
left:0;

`;
export const DateDisplay = styled.div`
  grid-column: 1;
  grid-row: 2;
  font-size: 0.9375rem;
  text-align: center;
  color: ${(props) => props.theme.color.light};
  height: ${(props) => props.theme.table.boxSize};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const HeatmapTable = styled.table`
  border-spacing: 0;
  width:960px;
`;
export const HeatmapTableBody = styled.tbody`
  border-spacing: 0;
  grid-column: 2;
  grid-row: 2;
`;
export const HeatmapTableRow = styled.tr`
  height: ${(props) => props.theme.table.boxSixe};
`;
export const HeatMapDataEntry = styled.td`
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => props.theme.table.color[valueToColor(props.value)]};
  color: ${(props) => props.theme.color.light};
  padding: 0;
  height: 40px;
  width: 40px;
  
`;
export const SelectedPostContainer = styled.div`
`;
export const ErrorMessage = styled.span`
width:100%;
grid-column: 1/-1;
text-align: center;
font-size:1.3rem;
`;
