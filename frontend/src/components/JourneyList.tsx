import JourneyListItem from './JourneyListItem';
import { Journey } from '../interfaces/journey.interface';
import ListHeader from './ListHeader';

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
        <ListHeader handleSortingChange={handleSortingChange} />
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
