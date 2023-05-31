import { Station } from '../interfaces/station.interface';

function StationListItem({
  station,
  handleStationIdChange,
}: {
  station: Station;
  handleStationIdChange: (id: number) => void;
}) {
  return (
    <tr
      onClick={() => handleStationIdChange(station.station_id)}
      className="border-b hover:bg-cyan-600 hover:bg-opacity-40"
    >
      <td className="whitespace-nowrap p-3 md:w-24">{station.station_id}</td>
      <td className="whitespace-nowrap p-3 md:w-80">{station.name_fi}</td>
      <td className="whitespace-nowrap p-3 md:w-80">{station.address_fi}</td>
      <td className="whitespace-nowrap p-3 md:w-48">{station.city_fi}</td>
    </tr>
  );
}

export default StationListItem;
