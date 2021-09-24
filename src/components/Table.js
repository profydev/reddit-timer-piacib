import React from 'react';
import styled from 'styled-components';

const colorMap = {
  0: 'yellowGreen',
  2: 'greenVeryLight',
  4: 'greenLight',
  5: 'greenMedium',
  8: 'greenRegular',
  9: 'greenMediumLight',
  16: 'blueRegular',
};
const valueToColor = (value) => {
  if (value === 0) {
    return colorMap[0];
  }
  if (value <= 2) {
    return colorMap[2];
  }
  if (value <= 4) {
    return colorMap[4];
  }
  if (value === 5) {
    return colorMap[5];
  }
  if (value <= 8) {
    return colorMap[8];
  }
  if (value <= 9) {
    return colorMap[9];
  }
  return colorMap[16];
};
const TableContainer = styled.div`
  width: 1114px;
  /* height: 332px; */
  border: 1px solid black;
  display: grid;
  grid-template-columns: ${(props) => props.theme.table.dateContainerWidth} auto ;
  grid-template-rows: ${(props) => props.theme.table.tableHeadHeight} auto ;
`;
const TableHead = styled.div`
  height: ${(props) => props.theme.table.tableHeadHeight};
  background: ${(props) => props.theme.table.tableHeadBackground};
  /* width:960px; */
  align-self:end;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-column: 2;
`;

const TimeDisplay = styled.div`
text-align:center;
  width:${(props) => `calc(2 * ${props.theme.table.boxSize})`};
`;
const DateContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: ${(props) => props.theme.table.dateContainerWidth};
  background-color:${(props) => props.theme.backgroundColor.tableDay};
  `;
const DateDisplay = styled.div`
  grid-column: 1;
  grid-row: 2;
  color: ${(props) => props.theme.color.light};
  width: 100%;
  height: ${(props) => props.theme.table.boxSize};
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeatmapTable = styled.table`
  grid-column: 2;
  grid-row: 2;
  `;
const HeatmapTableRow = styled.tr`
  height: ${(props) => props.theme.table.boxSixe};
`;
const HeatMapDataEntry = styled.td`
  text-align: center;
  background-color: ${(props) => props.theme.table.color[valueToColor(props.value)]};
  color: ${(props) => props.theme.color.light};
  padding:0;
  height: 40px;
  width:  40px;
`;
const dates = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const times = [
  '12:00am',
  '2:00am',
  '4:00am',
  '6:00am',
  '8:00am',
  '10:00am',
  '12:00pm',
  '2:00pm',
  '4:00pm',
  '6:00pm',
  '8:00pm',
  '10:00pm',
];
const Table = () => (
  <TableContainer>
    <TableHead>
      {times.map((time) => <TimeDisplay>{time}</TimeDisplay>)}
    </TableHead>
    <DateContainer>
      {dates.map((day) => (
        <DateDisplay key={day}>
          {day}
        </DateDisplay>
      ))}
    </DateContainer>
    <HeatmapTable>
      {[1, 2, 3, 4, 5, 6, 7].map((x) => (
        <HeatmapTableRow>
          {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3].map(
            (y) => <HeatMapDataEntry value={x + y}>{x + y}</HeatMapDataEntry>,
          )}
        </HeatmapTableRow>
      ))}

    </HeatmapTable>
  </TableContainer>
);

export default Table;
