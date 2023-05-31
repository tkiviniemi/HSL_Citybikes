import { render, screen, fireEvent } from '@testing-library/react';
import jest from 'jest-mock';
import StationListItem from './StationListItem';

const station = {
  station_id: 1,
  name_fi: 'Station 1',
  name_sv: 'Station 1',
  name_en: 'Station 1',
  address_fi: 'Address 1',
  address_sv: 'Address 1',
  city_fi: 'City 1',
  city_sv: 'City 1',
  capacity: 1,
  long: 1,
  lat: 1,
};

test('renders StationListItem component', () => {
  const handleStationIdChange = jest.fn();

  render(
    <StationListItem
      station={station}
      handleStationIdChange={handleStationIdChange}
    />
  );

  const listItemElement = screen.getByRole('row');
  expect(listItemElement).toBeInTheDocument();
});

test('calls handleStationIdChange with the station ID when the row is clicked', () => {
  const handleStationIdChange = jest.fn();

  render(
    <StationListItem
      station={station}
      handleStationIdChange={handleStationIdChange}
    />
  );

  const listItemElement = screen.getByRole('row');
  fireEvent.click(listItemElement);

  expect(handleStationIdChange).toHaveBeenCalledWith(station.station_id);
});

test('renders station details correctly', () => {
  const handleStationIdChange = jest.fn();

  render(
    <StationListItem
      station={station}
      handleStationIdChange={handleStationIdChange}
    />
  );

  const stationIdElement = screen.getByText(station.station_id);
  const nameElement = screen.getByText(station.name_fi);
  const addressElement = screen.getByText(station.address_fi);
  const cityElement = screen.getByText(station.city_fi);

  expect(stationIdElement).toBeInTheDocument();
  expect(nameElement).toBeInTheDocument();
  expect(addressElement).toBeInTheDocument();
  expect(cityElement).toBeInTheDocument();
});
