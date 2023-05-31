import { render, screen } from '@testing-library/react';
import JourneyListItem from './JourneyListItem';

const journey = {
  id: 1,
  departure_time: new Date('2021-01-01T00:00:00.000Z'),
  return_time: new Date('2021-01-01T00:30:00.000Z'),
  departure_station_id: 1,
  departure_station_name: 'Station A',
  return_station_id: 2,
  return_station_name: 'Station B',
  covered_distance: 2500,
  duration: 1800,
};

test('renders JourneyListItem component', () => {
  render(<JourneyListItem journey={journey} />);

  const listItemElement = screen.getByRole('row');
  expect(listItemElement).toBeInTheDocument();
});

test('renders journey details correctly', () => {
  render(<JourneyListItem journey={journey} />);

  const journeyIdElement = screen.getByText(journey.id);
  const departureStationElement = screen.getByText(
    journey.departure_station_name
  );
  const returnStationElement = screen.getByText(journey.return_station_name);
  const coveredDistanceElement = screen.getByText('2.5 km');
  const durationElement = screen.getByText('30 min');

  expect(journeyIdElement).toBeInTheDocument();
  expect(departureStationElement).toBeInTheDocument();
  expect(returnStationElement).toBeInTheDocument();
  expect(coveredDistanceElement).toBeInTheDocument();
  expect(durationElement).toBeInTheDocument();
});
