// export const generateUrl = ({ timeFrame, subreddit, querySize }) => `https://api.pushshift.io/reddit/submission/search/?subreddit=${subreddit}&${timeFrame}&size=${querySize}&sort=desc&sort_type=score`;
export const generateUrl = ({ timeFrame, subreddit, querySize = 500 }) => `https://api.pushshift.io/reddit/submission/search/?subreddit=${subreddit}&size=${querySize}&${timeFrame}&order=desc&sort=score`;
export const generateHours = (date) => date.getHours() + Math.round(date.getMinutes() / 60);
// converts post number to color
// color to number or posts relations
export const timeFrames = ['after=1y', 'before=1y&after=2y', 'before=2y&after=3y', 'before=3y&after=4y', 'before=4y&after=5y'];
const colorMap = {
  0: 'yellowGreen',
  2: 'greenVeryLight',
  4: 'greenLight',
  5: 'greenMedium',
  8: 'greenRegular',
  9: 'greenMediumLight',
  16: 'blueRegular',
};
export const valueToColor = (value) => {
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
export const table = {
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
export const defaultCalendar = {
  0: table,
  1: table,
  2: table,
  3: table,
  4: table,
  5: table,
  6: table,
};
  // function to generate each row or day of data
export const createDayTable = (postsFromOneDay) => {
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
  // function that uses createDayTable to
  // create entire new calendar object
export const updateCalendar = (postsArray) => {
  const filteredByDay = [0, 1, 2, 3, 4, 5, 6].map((day) => (
    postsArray.filter((x) => x.created_day === Number(day))));
  const updatedCalendar = {
    0: createDayTable(filteredByDay[0]),
    1: createDayTable(filteredByDay[1]),
    2: createDayTable(filteredByDay[2]),
    3: createDayTable(filteredByDay[3]),
    4: createDayTable(filteredByDay[4]),
    5: createDayTable(filteredByDay[5]),
    6: createDayTable(filteredByDay[6]),
  };
    // last element in each dayTable is 11:30-12am
    // therefore they must be added to the following daysTable
  updatedCalendar[0][0] += updatedCalendar[6][24];
  updatedCalendar[1][0] += updatedCalendar[0][24];
  updatedCalendar[2][0] += updatedCalendar[1][24];
  updatedCalendar[3][0] += updatedCalendar[2][24];
  updatedCalendar[4][0] += updatedCalendar[3][24];
  updatedCalendar[5][0] += updatedCalendar[4][24];
  updatedCalendar[6][0] += updatedCalendar[5][24];
  return updatedCalendar;
};
