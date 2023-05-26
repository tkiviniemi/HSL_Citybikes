import JourneyListItem from './JourneyListItem';
import { Journey } from '../interfaces/journey.interface';

type SortKey = keyof Journey;

function JourneyList({
  journeyData,
  handleSortingChange,
}: {
  journeyData: Journey[];
  handleSortingChange: (key: SortKey) => void;
}) {
  return (
    <div className="flex justify-center">
      <table>
        <thead className="">
          <tr className="flex flex-row font-bold gap-4">
            <th id="id">
              <button onClick={() => handleSortingChange('id')}>Id</button>
            </th>
            <th id="departure_station_name">
              <button
                onClick={() => handleSortingChange('departure_station_name')}
              >
                Departure station
              </button>
            </th>
            <th id="return_station_name">
              <button
                onClick={() => handleSortingChange('return_station_name')}
              >
                Return station
              </button>
            </th>
            <th id="covered_distance">
              <button onClick={() => handleSortingChange('covered_distance')}>
                Distance
              </button>
            </th>
            <th id="duration">
              <button onClick={() => handleSortingChange('duration')}>
                Duration
              </button>
            </th>
          </tr>
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
