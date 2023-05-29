import { Journey } from '../interfaces/journey.interface';

function JourneyListItem({ journey }: { journey: Journey }) {
  const covered_distance = (journey.covered_distance / 1000).toFixed(1);
  const duration = Math.round(journey.duration / 60);

  return (
    <tr className="border-b hover:bg-blue-200">
      <td className="p-3">{journey.id}</td>
      <td className="p-3">{journey.departure_station_name}</td>
      <td className="p-3">{journey.return_station_name}</td>
      <td className="p-3">{covered_distance} km</td>
      <td className="p-3">{duration} min</td>
    </tr>
  );
}

export default JourneyListItem;
