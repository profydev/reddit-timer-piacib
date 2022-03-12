import styled from 'styled-components';
import { valueToColor } from './TableFunctions';
// styled components
export const TableContainer = styled.div`
  width: ${(props) => props.theme.table.tableWidth};
  height: 332px;
  border: none;
  display: grid;
  position: relative;
  margin: 31px 0 0 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  grid-template-columns: ${(props) => props.theme.table.dateContainerWidth} auto;
  grid-template-rows: ${(props) => props.theme.table.tableHeadHeight} auto;
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    transform: rotate(90deg);
    margin-top: 400px;
    margin-bottom: 400px;
    margin-left: ${(props) => props.theme.table.tableHeadHeight};
  }
`;
export const HeatMapImage = styled.img`
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
  }
`;

export const TableHead = styled.div`
  height: ${(props) => props.theme.table.tableHeadHeight};
  background: ${(props) => props.theme.table.tableHeadBackground};
  align-self: end;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 2;
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    height: 4.5rem;
  }
`;
export const TimeDisplay = styled.div`
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  width: ${(props) => `calc(2 * ${props.theme.table.boxSize})`};
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    transform: rotate(-90deg);
  }
`;
export const DateContainer = styled.div`
  ${'' /* display: flex; */}
  flex-direction: column;
  justify-content: space-between;
  width: ${(props) => props.theme.table.dateContainerWidth};
  background-color: ${(props) => props.theme.backgroundColor.tableDay};

  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    left: -550px;
    top: 0px;
    z-index: 1;
  }
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
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    width: ${(props) => props.theme.table.dateContainerWidth};
    font-size: 0.8rem;
    line-height: 1;
    writing-mode: vertical-rl;
    transform: rotate(-90deg);
    text-orientation: upright;
  }
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
  @media (max-width: ${(props) => props.theme.mobile.tableMinimizeMaxWidth}) {
    transform: rotate(-90deg);
  }
`;
export const SelectedPostContainer = styled.div``;
