import { Journey } from '../interfaces/journey.interface';

function JourneyListItem({ journey }: { journey: Journey }) {
  const departure_time = new Date(journey.departure_time).toLocaleString();
  const return_time = new Date(journey.return_time).toLocaleString();
  const covered_distance = (journey.covered_distance / 1000).toFixed(1);
  const duration = Math.round(journey.duration / 60);

  return (
    <tr className="flex justify-between hover:bg-blue-200">
      <td>{journey.id}</td>
      <td>{journey.departure_station_name}</td>
      <td>{departure_time}</td>
      <td>{journey.return_station_name}</td>
      <td>{return_time}</td>
      <td>{covered_distance} km</td>
      <td>{duration} min</td>
    </tr>
  );
}

export default JourneyListItem;
