import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SelectedPostDisplay from '../Posts/SelectedPostsDisplay';
import tableImg from './media/table.png';
import Loading from '../Loading/Loading';
import {
  generateHours,
  generateUrl,
  updateCalendar,
  defaultCalendar,
  timeFrames,
} from './TableFunctions';
import {
  TableContainer, HeatMapImage,
  TableHead,
  TimeDisplay,
  DateContainer,
  DateDisplay,
  HeatmapTable,
  HeatmapTableBody,
  HeatmapTableRow,
  HeatMapDataEntry, SelectedPostContainer,
} from './TableStyles';

const dates = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const dates = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const times = ['12:00am', '2:00am', '4:00am', '6:00am', '8:00am', '10:00am', '12:00pm', '2:00pm', '4:00pm', '6:00pm', '8:00pm', '10:00pm'];
const Table = ({ subreddit }) => {
  const [calendar, setCalendar] = useState(defaultCalendar);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // early exit function
    if (!subreddit) return {};
    const redditUrl = generateUrl({ timeFrame: timeFrames[0], subreddit, querySize: 500 });
    const controller = new AbortController();
    async function fetchSubredditData(url) {
      // reset calendar data while
      // new data is fetched
      setLoading(true);
      setCalendar(defaultCalendar);
      // fetch data
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const jsonResp = await response.json();
        const postsArray = [];
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
        const updatedCalendar = await updateCalendar(postsArray);
        // set fetched data to states
        setPosts(postsArray);
        setCalendar(updatedCalendar);
        setLoading(false);
      } catch (e) {
        controller?.abort();
      }
    }
    fetchSubredditData(redditUrl);
    // cleanup function
    return () => { controller?.abort(); };
    // updates when new subreddit is searched
  }, [subreddit]);

  return subreddit ? (
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
      <HeatMapImage src={tableImg} alt="heat map table" />
    </TableContainer>
  );
};
Table.propTypes = {
  subreddit: PropTypes.string,
};
Table.defaultProps = {
  subreddit: '',
};
export default Table;
