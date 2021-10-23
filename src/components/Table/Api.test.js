import React from 'react';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Table from './Table';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import theme from '../../theme';
import testResponse from './testResponse';
import App from '../../App';

const server = setupServer(
  rest.get('https://api.pushshift.io/reddit/submission/search/', async (req, res, ctx) => res(ctx.json(testResponse))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('when no subreddit is provided table img appears', async () => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Table subreddit="" />
      </ThemeProvider>
    </MemoryRouter>,
  );
  expect(screen.getByAltText(/heat map/i));
});
test('when a subreddit is provided table appears', async () => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={theme}>
        <Table subreddit="javascript" />
      </ThemeProvider>
    </MemoryRouter>,
  );
  expect(screen.getByRole(/table/i));
});
test('when a subreddit is provided table data is displayed', async () => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>,
  );
  const link = screen.getByTestId('reddit-timer-svg');
  userEvent.click(link);
  const showMeLink = screen.getByRole('link', { name: /SHOW ME THE BEST TIME/i });
  userEvent.click(showMeLink);
  expect(window.location.href).toContain('search/javascript');
  await waitForElementToBeRemoved(screen.getByAltText(/loading spinner/i));
  expect(screen.getAllByText('1')).toBeTruthy();
  expect(screen.getAllByText('2')).toBeTruthy();
  expect(screen.getAllByText('3')).toBeTruthy();
});
