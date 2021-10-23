import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from '../../App';

describe('Footer', () => {
  test('profy.dev link points to correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const link = screen.getByRole('link', { name: 'profy.dev' });
    expect(link).toHaveAttribute('href', 'https://profy.dev/employers');
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
