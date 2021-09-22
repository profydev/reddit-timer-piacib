import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

const headerButtons = {
  'How it works': {
    name: new RegExp(/how it works/i),
    href: '/#how-it-works',
  },
  About: {
    name: new RegExp(/about/i),
    href: '/#about',
  },
  Search: {
    name: new RegExp(/search/i),
    // javascript is the default subreddit to search
    // this href will need to change
    // if the default search is changed
    href: '/search/javascript',
  },
};
describe('Header', () => {
  Object.entries(headerButtons).map(([key, value]) => (
    test(`${key} link points to correct page`, () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
      const link = screen.getByRole('link', { name: value.name });
      userEvent.click(link);
      expect(window.location.href).toContain(value.href);
    })
  ));
  test('svg logo points to correct link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByTestId('reddit-timer-svg');
    userEvent.click(link);
    expect(window.location.pathname).toBe('/');
  });
});
describe('Footer', () => {
  test('profy.dev link points to correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'profy.dev' });
    screen.debug(link);
    expect(link).toHaveAttribute('href', 'https://profy.dev');
  });
  test('terms and services link points to correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: /Terms & Privacy/i });
    userEvent.click(link);
    expect(window.location.href).toContain('terms');
  });
  test('svg logo points to correct link', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByTestId('reddit-timer-svg');
    userEvent.click(link);
    expect(window.location.pathname).toBe('/');
  });
});
