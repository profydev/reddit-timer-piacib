import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
<<<<<<< HEAD
import App from '../../App';
=======
import { ThemeProvider } from 'styled-components';
import App from '../../App';
import theme from '../../theme';
import Header from './Header';
>>>>>>> main

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
  Object.entries(headerButtons).map(([key]) => test(`${key} link points to correct page`, () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: headerButtons.Search.name });
    userEvent.click(link);
    expect(window.location.href).toContain(headerButtons.Search.href);
  }));
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
<<<<<<< HEAD
=======
  test('burger menu opens when clicked', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const burgerMenu = screen.getByLabelText('Toggle menu');
    userEvent.click(burgerMenu);
    expect(burgerMenu).toHaveAttribute('aria-expanded', 'true');
  });
  test('burger menu closes when clicked twice', () => {
    render(
      <MemoryRouter>
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      </MemoryRouter>,
    );
    const burgerMenu = screen.getByLabelText('Toggle menu');
    userEvent.dblClick(burgerMenu);
    expect(burgerMenu).toHaveAttribute('aria-expanded', 'false');
  });
>>>>>>> main
});
