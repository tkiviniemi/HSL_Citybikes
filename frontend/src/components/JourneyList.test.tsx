import { render, screen, fireEvent } from '@testing-library/react';
import jest from 'jest-mock';
import JourneyList from './JourneyList';

const journeyData = [
  {
    id: 1,
    departure_time: new Date('2021-01-01T00:00:00.000Z'),
    return_time: new Date('2021-01-01T00:30:00.000Z'),
    departure_station_id: 1,
    departure_station_name: 'Station A',
    return_station_id: 2,
    return_station_name: 'Station B',
    covered_distance: 2500,
    duration: 1800,
  },
  {
    id: 2,
    departure_time: new Date('2021-01-01T00:00:00.000Z'),
    return_time: new Date('2021-01-01T00:30:00.000Z'),
    departure_station_id: 1,
    departure_station_name: 'Station A',
    return_station_id: 2,
    return_station_name: 'Station B',
    covered_distance: 2500,
    duration: 1800,
  },
];

test('renders JourneyList component', () => {
  render(
    <JourneyList
      journeyData={journeyData}
      handleSortingChange={jest.fn()}
      handlePageChange={jest.fn()}
      handleLimitChange={jest.fn()}
      currentPage={1}
      limitPerPage={10}
    />
  );

  const journeyListElement = screen.getByRole('table');
  expect(journeyListElement).toBeInTheDocument();
});

test('renders journey items correctly', () => {
  render(
    <JourneyList
      journeyData={journeyData}
      handleSortingChange={jest.fn()}
      handlePageChange={jest.fn()}
      handleLimitChange={jest.fn()}
      currentPage={1}
      limitPerPage={10}
    />
  );

  const journeyItems = screen.getAllByRole('row');
  expect(journeyItems.length).toBe(journeyData.length);
});

test('calls handleSortingChange on column header click', () => {
  const handleSortingChange = jest.fn();

  render(
    <JourneyList
      journeyData={journeyData}
      handleSortingChange={handleSortingChange}
      handlePageChange={jest.fn()}
      handleLimitChange={jest.fn()}
      currentPage={1}
      limitPerPage={10}
    />
  );

  const columnHeader = screen.getByText('Departure Station');
  fireEvent.click(columnHeader);

  expect(handleSortingChange).toHaveBeenCalledWith('departure_station_name');
});
