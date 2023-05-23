import JourneyListItem from './JourneyListItem';

import { Journey } from '../interfaces/journey.interface';

function JourneyList({ journeyData }: { journeyData: Journey[] }) {
  return (
    <div className="flex justify-center">
      <table>
        <thead className="flex flex-row gap-4 font-bold">
          <th>Id</th>
          <th>Departure station</th>
          <th>Return station</th>
          <th>Distance</th>
          <th>Duration</th>
        </thead>
        <tbody className="flex flex-col">
          {journeyData.map((journey: Journey) => (
            <JourneyListItem key={journey.id} journey={journey} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default JourneyList;
