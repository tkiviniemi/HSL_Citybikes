import { Journey } from '../interfaces/journey.interface';

function JourneyListItem({ journey }: { journey: Journey }) {
  const covered_distance = (journey.covered_distance / 1000).toFixed(1);
  const duration = Math.round(journey.duration / 60);

  return (
    <tr className="border-b hover:bg-cyan-600 hover:bg-opacity-40">
      <td className="whitespace-nowrap p-3 md:w-24">{journey.id}</td>
      <td className="whitespace-nowrap p-3 md:w-80">
        {journey.departure_station_name}
      </td>
      <td className="whitespace-nowrap p-3 md:w-80">
        {journey.return_station_name}
      </td>
      <td className="whitespace-nowrap p-3 md:w-32">{covered_distance} km</td>
      <td className="whitespace-nowrap p-3 md:w-32">{duration} min</td>
    </tr>
  );
}

export default JourneyListItem;
