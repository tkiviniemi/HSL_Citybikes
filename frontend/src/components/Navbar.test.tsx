import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  render(<Navbar />);

  const navbarElement = screen.getByRole('navigation');
  expect(navbarElement).toBeInTheDocument();
});

test('renders logo with correct text', () => {
  render(<Navbar />);

  const logoElement = screen.getByText(/HSL Citybikes/i);
  expect(logoElement).toBeInTheDocument();
});

test('renders Journeys link', () => {
  render(<Navbar />);

  const journeysLinkElement = screen.getByText(/Journeys/i);
  expect(journeysLinkElement).toBeInTheDocument();
  expect(journeysLinkElement).toHaveAttribute('href', '/journeys');
});

test('renders Stations link', () => {
  render(<Navbar />);

  const stationsLinkElement = screen.getByText(/Stations/i);
  expect(stationsLinkElement).toBeInTheDocument();
  expect(stationsLinkElement).toHaveAttribute('href', '/stations');
});
