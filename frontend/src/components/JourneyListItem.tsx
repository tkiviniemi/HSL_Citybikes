import { Journey } from '../interfaces/journey.interface';

function JourneyListItem({ journey }: { journey: Journey }) {
  return (
    <tr className="flex justify-between hover:bg-blue-200">
      <td>{journey.id}</td>
      <td>{journey.departure_station_name}</td>
      <td>{journey.return_station_name}</td>
      <td>{Math.round(journey.covered_distance / 1000)} km</td>
      <td>{Math.round(journey.duration / 60)} min</td>
    </tr>
  );
}

export default JourneyListItem;
