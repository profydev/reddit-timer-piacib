import styled from 'styled-components';
import { valueToColor } from './TableFunctions';
// styled components
export const TableContainer = styled.div`
  width: 1114px;
  height: 332px;
  border: none;
  display: grid;
  margin: 31px 0 0 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  grid-template-columns: ${(props) => props.theme.table.dateContainerWidth} auto;
  grid-template-rows: ${(props) => props.theme.table.tableHeadHeight} auto;

`;
export const TableHead = styled.div`
  height: ${(props) => props.theme.table.tableHeadHeight};
  background: ${(props) => props.theme.table.tableHeadBackground};
  /* width:960px; */
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.theme.table.dateContainerWidth};
  background-color: ${(props) => props.theme.backgroundColor.tableDay};
`;
export const DateDisplay = styled.div`
  grid-column: 1;
  grid-row: 2;
  font-size: 0.9375rem;
  color: ${(props) => props.theme.color.light};
  width: 100%;
  height: ${(props) => props.theme.table.boxSize};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const HeatmapTable = styled.table`
 border-spacing: 0;
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
