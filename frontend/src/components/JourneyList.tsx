import JourneyListItem from './JourneyListItem';
import { Journey } from '../interfaces/journey.interface';
import ListHeader from './ListHeader';
import Pagination from './Pagination';

type SortKey = keyof Journey;
type PageChange = 'next' | 'prev' | 'reset';

function JourneyList({
  journeyData,
  handleSortingChange,
  handlePageChange,
  handleLimitChange,
}: {
  journeyData: Journey[];
  handleSortingChange: (key: SortKey) => void;
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
}) {
  return (
    <div className="relative overflow-x-auto rounded-lg bg-slate-50 shadow-md">
      <table className="text-md w-auto">
        <ListHeader handleSortingChange={handleSortingChange} />
        <tbody>
          {journeyData.map((journey: Journey) => (
            <JourneyListItem key={journey.id} journey={journey} />
          ))}
        </tbody>
      </table>
      <Pagination
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
      />
    </div>
  );
}

export default JourneyList;
