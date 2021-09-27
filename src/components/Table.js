import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SelectedPostDisplay from './SelectedPostsDisplay';

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
  border: none;
  display: grid;
  margin: 31px 0 0 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
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
  font-size:0.875rem;
  font-weight: 600;
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
const HeatmapTable = styled.tbody`
  border-spacing: 0;
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
const table = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0,
  11: 0,
  12: 0,
  13: 0,
  14: 0,
  15: 0,
  16: 0,
  17: 0,
  18: 0,
  19: 0,
  20: 0,
  21: 0,
  22: 0,
  23: 0,
  24: 0,
};
const createDayTable = (postsFromOneDay) => {
  const dayTable = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
  };
  for (let i = 0; i < postsFromOneDay.length; i += 1) {
    const post = postsFromOneDay[i];
    dayTable[post.created_hour] += 1;
  }
  return dayTable;
};
const updateCalendar = (postsArray) => {
  const filteredByDay = [0, 1, 2, 3, 4, 5, 6].map(
    (day) => postsArray.filter(
      (x) => x.created_day === Number(day),
    ),
  );
  const updatedCalendar = {
    0: createDayTable(filteredByDay[0]),
    1: createDayTable(filteredByDay[1]),
    2: createDayTable(filteredByDay[2]),
    3: createDayTable(filteredByDay[3]),
    4: createDayTable(filteredByDay[4]),
    5: createDayTable(filteredByDay[5]),
    6: createDayTable(filteredByDay[6]),
  };
  updatedCalendar[0][0] += updatedCalendar[6][24];
  updatedCalendar[1][0] += updatedCalendar[0][24];
  updatedCalendar[2][0] += updatedCalendar[1][24];
  updatedCalendar[3][0] += updatedCalendar[2][24];
  updatedCalendar[4][0] += updatedCalendar[3][24];
  updatedCalendar[5][0] += updatedCalendar[4][24];
  updatedCalendar[6][0] += updatedCalendar[5][24];
  return updatedCalendar;
};
const SelectedPostContainer = styled.div`
/* width:100%; */
`;
const generateHours = (date) => date.getHours() + Math.round(date.getMinutes() / 60);
const generateUrl = ({ timeFrame, subreddit, querySize }) => (
  `https://api.pushshift.io/reddit/submission/search/?subreddit=${subreddit}&${timeFrame}&size=${querySize}&sort=desc&sort_type=score`
);
const Table = (
  { subreddit },
) => {
  const [calendar, setCalendar] = useState({
    0: table, 1: table, 2: table, 3: table, 4: table, 5: table, 6: table,
  });
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPosts] = useState([]);
  useEffect(() => {
    if (!subreddit) {
      return;
    }
    async function fetchSubredditData() {
      const postsArray = [];
      const response = await fetch(generateUrl({ timeFrame: 'after=1y', subreddit, querySize: 100 }));
      const jsonResp = await response.json();
      jsonResp.data.forEach((post) => {
        const date = new Date(post.created_utc * 1000);
        postsArray.push({
          score: post.score,
          title: post.title,
          upvote_ratio: post.upvote_ratio,
          full_link: post.full_link,
          author: post.author,
          created_utc: post.created_utc,
          created_day: date.getDay(),
          created_hour: generateHours(date),
        });
      });

      const updatedCalendar = updateCalendar(postsArray);
      setPosts(postsArray);
      setCalendar(updatedCalendar);
    }
    fetchSubredditData();
  }, [subreddit]);
  return (
    <>
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
        <table style={{ borderSpacing: 0 }}>
          <HeatmapTable>
            {Object.keys(calendar).map((dayOfTheWeek) => (
              <HeatmapTableRow key={dayOfTheWeek}>
                {Object.keys(calendar[dayOfTheWeek]).slice(0, 24).map(
                  (timeOfTheDay) => (
                    <HeatMapDataEntry
                      onClick={() => setSelectedPosts(posts.filter((post) => (
                        post.created_day === Number(dayOfTheWeek)
                    && post.created_hour === Number(timeOfTheDay))))}
                      key={Math.random()}
                      value={calendar[dayOfTheWeek][timeOfTheDay]}
                    >
                      {calendar[dayOfTheWeek][timeOfTheDay]}
                    </HeatMapDataEntry>
                  ),
                )}
              </HeatmapTableRow>
            ))}
          </HeatmapTable>
        </table>
      </TableContainer>
      <SelectedPostContainer>
        {selectedPost.map((post) => (
          <SelectedPostDisplay
            title={post.title}
            score={post.score}
            upvoteRatio={post.upvote_ratio}
            fullLink={post.full_link}
            author={post.author}
          />
        ))}
      </SelectedPostContainer>
    </>
  );
};
Table.propTypes = {
  subreddit: PropTypes.string.isRequired,
};

export default Table;
