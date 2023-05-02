import { useState, useEffect } from 'react';
import {
  generateHours,
  generateUrl,
  updateCalendar,
  defaultCalendar,
  timeFrames,
} from './TableFunctions';

const useSubRedditSearch = (subreddit) => {
  const [calendar, setCalendar] = useState(defaultCalendar);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
        if (jsonResp.data.length === 0) {
          setError('no subreddit found');
          setCalendar(defaultCalendar);
          setPosts([]);
          return;
        }
        setError(false);
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
  return {
    calendar, posts, loading, error,
  };
};
export default useSubRedditSearch;
