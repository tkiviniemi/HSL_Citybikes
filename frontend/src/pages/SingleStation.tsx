import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { getStationById } from '../api/stations';
import LoadingSpinner from '../components/LoadingSpinner';
import { StationWithStats } from '../interfaces/stationWithStats.interface';

function SingleStation() {
  const { station_id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['station', Number(station_id)],
    queryFn: () => getStationById(Number(station_id)),
  });

  if (isLoading) return <LoadingSpinner />;

  if (error || data.error)
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="relative overflow-x-auto rounded-lg border-2 border-red-700 border-opacity-70 bg-slate-100 p-3 shadow-md">
          <p>Error: {error || data.error}</p>
        </div>
      </div>
    );

  const station: StationWithStats = data.stationData;

  return (
    <div>
      <div className="flex justify-center md:py-6">
        <div className="relative overflow-x-auto rounded-lg bg-slate-100 shadow-md">
          <table className="text-md table-fixed">
            <thead className="border-b-2 border-cyan-800 text-left text-sm uppercase">
              <tr>
                <th className="p-3 font-semibold">ID</th>
                <th className="p-3 font-semibold">Station Name</th>
                <th className="p-3 font-semibold">Station Address</th>
                <th className="p-3 font-semibold">City</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="whitespace-nowrap p-3 md:w-24">
                  {station.station_id}
                </td>
                <td className="whitespace-nowrap p-3 md:w-80">
                  {station.name_fi}
                </td>
                <td className="whitespace-nowrap p-3 md:w-80">
                  {station.address_fi}
                </td>
                <td className="whitespace-nowrap p-3 md:w-48">
                  {station.city_fi}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <MapContainer
              className="h-48 w-full md:h-96"
              center={[station.lat, station.long]}
              zoom={13}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&amp;copy <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[station.lat, station.long]}>
                <Popup>
                  <p>{station.name_fi}</p>
                  <p>{station.address_fi}</p>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:py-6">
        <div className="relative overflow-x-auto rounded-lg bg-slate-100 shadow-md">
          <table className="text-md table-fixed">
            <thead className="border-b-2 border-cyan-800 text-left text-sm uppercase">
              <tr>
                <th className="p-3 font-semibold">Type of Journey</th>
                <th className="p-3 font-semibold">Amount of journeys</th>
                <th className="p-3 font-semibold">Average Distance</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b text-left">
                <td className="border-b p-3 text-left uppercase">
                  Departing from station
                </td>
                <td className="whitespace-nowrap p-3 md:w-64">
                  {station.departure_statistics._count.departure_station_id}
                </td>
                <td className="whitespace-nowrap p-3 md:w-64">
                  {(
                    station.departure_statistics._avg.covered_distance / 1000
                  ).toFixed(1)}{' '}
                  km
                </td>
              </tr>
              <tr className="border-b text-left">
                <td className="whitespace-nowrap p-3 uppercase md:w-80">
                  Returning to station
                </td>
                <td className="whitespace-nowrap p-3 md:w-64">
                  {station.return_statistics._count.return_station_id}
                </td>
                <td className="whitespace-nowrap p-3 md:w-64">
                  {(
                    station.return_statistics._avg.covered_distance / 1000
                  ).toFixed(1)}{' '}
                  km
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SingleStation;
