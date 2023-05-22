import { Journey } from '../interfaces/journey.interface';

function JourneyListItem({ journey }: { journey: Journey }) {
  return (
    <li className="flex flex-row justify-evenly">
      <p>{journey.id}</p>
      <p>{journey.departure_station_name}</p>
      <p>{journey.return_station_name}</p>
      <p>{Math.round(journey.covered_distance / 1000)} km</p>
      <p>{Math.round(journey.duration / 60)} min</p>
    </li>
  );
}

export default JourneyListItem;
