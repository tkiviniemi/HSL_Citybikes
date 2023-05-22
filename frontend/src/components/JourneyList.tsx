import JourneyListItem from './JourneyListItem';

import { Journey } from '../interfaces/journey.interface';

function JourneyList({ journeyData }: { journeyData: Journey[] }) {
  return (
    <div className="flex justify-center ">
      <ul>
        <li className="flex flex-row gap-4 font-bold">
          <p>Id</p>
          <p>Departure station</p>
          <p>Return station</p>
          <p>Distance</p>
          <p>Duration</p>
        </li>
        {journeyData.map((journey: Journey) => (
          <JourneyListItem key={journey.id} journey={journey} />
        ))}
      </ul>
    </div>
  );
}

export default JourneyList;
