import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SelectedPostDisplay from '../Posts/SelectedPostsDisplay';
import tableImg from './media/table.png';
import Loading from '../Loading/Loading';
import useSubRedditSearch from './useSubredditSearch';
import {
  TableContainer, HeatMapImage,
  TableHead,
  TimeDisplay,
  DateContainer,
  DateDisplay,
  HeatmapTable,
  HeatmapTableBody,
  HeatmapTableRow,
  ErrorMessage,
  HeatMapDataEntry, SelectedPostContainer,
} from './Table.styles';

const dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const times = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am', '12:00pm', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];
const Table = ({ subreddit }) => {
  const [selectedPost, setSelectedPosts] = useState([]);
  const {
    calendar, posts, loading, error,
  } = useSubRedditSearch(subreddit);
  if (!subreddit) {
    return (
      <TableContainer exampleContainer>
        <HeatMapImage src={tableImg} alt="heat map table" />
      </TableContainer>
    );
  }
  return (
    <>
      { !error ? (
        <>
          <TableContainer>
            <Loading isLoading={loading} />
            <TableHead>
              {times.map((time) => (
                <TimeDisplay key={time}>{time}</TimeDisplay>
              ))}
            </TableHead>
            <DateContainer>
              {dates.map((day) => (
                <DateDisplay key={day}>{day}</DateDisplay>
              ))}
            </DateContainer>
            <HeatmapTable>
              <HeatmapTableBody>
                {Object.keys(calendar).map((dayOfTheWeek) => (
                  <HeatmapTableRow key={dayOfTheWeek}>
                    {Object.keys(calendar[dayOfTheWeek])
                      .slice(0, 24)
                      .map((timeOfTheDay) => (
                        <HeatMapDataEntry
                          onClick={() => setSelectedPosts(
                            posts.filter(
                              (post) => post.created_day === Number(dayOfTheWeek)
                              && post.created_hour === Number(timeOfTheDay),
                            ),
                          )}
                          key={Math.random()}
                          value={calendar[dayOfTheWeek][timeOfTheDay]}
                        >
                          {calendar[dayOfTheWeek][timeOfTheDay]}
                        </HeatMapDataEntry>
                      ))}
                  </HeatmapTableRow>
                ))}
              </HeatmapTableBody>
            </HeatmapTable>
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
      ) : (
        <TableContainer>
          <ErrorMessage>{error}</ErrorMessage>
        </TableContainer>
      )}
    </>
  );
};
Table.propTypes = {
  subreddit: PropTypes.string,
};
Table.defaultProps = {
  subreddit: '',
};

export default Table;
