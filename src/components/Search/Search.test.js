import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';
// import SearchPage from '../pages/SearchPage';

const defaultSubreddit = 'javascript';
describe('Table', () => {
  test('typing in subreddit input box is disabled on home screen', () => {
    render(
      <MemoryRouter pathname="/">
        <App />
      </MemoryRouter>,
    );
    const subRedditInput = screen.getByLabelText('r/');
    userEvent.type(subRedditInput, 'nothing should appear');
    expect(subRedditInput).toHaveValue(defaultSubreddit);
  });
  test('typing in subreddit input box on search page works', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /SHOW ME THE BEST TIME/i });
    userEvent.click(link);
    const subRedditInput = screen.getByLabelText('r/');
    userEvent.type(subRedditInput, ' something should appear');
    expect(subRedditInput).toHaveValue(`${defaultSubreddit} something should appear`);
  });
  test('Show me best time button points to correct page', () => {
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
  });
});
