import JourneyListItem from './JourneyListItem';
import { Journey } from '../interfaces/journey.interface';
import ListHeader from './ListHeader';
import Pagination from './Pagination';

type SortKey = keyof Journey;
type PageChange = 'next' | 'prev';

function JourneyList({
  journeyData,
  handleSortingChange,
  handlePageChange,
  handleLimitChange,
  currentPage,
  limitPerPage,
}: {
  journeyData: Journey[];
  handleSortingChange: (key: SortKey) => void;
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
  currentPage: number;
  limitPerPage: number;
}) {
  const keys = [
    { id: 'id', name: 'ID' },
    { id: 'departure_station_name', name: 'Departure Station' },
    { id: 'return_station_name', name: 'Return Station' },
    { id: 'covered_distance', name: 'Distance' },
    { id: 'duration', name: 'Duration' },
  ];

  return (
    <div className="relative overflow-x-auto rounded-lg bg-slate-100 shadow-md">
      <table className="text-md table-fixed">
        <ListHeader data={keys} handleSortingChange={handleSortingChange} />
        <tbody>
          {journeyData.map((journey: Journey) => (
            <JourneyListItem key={journey.id} journey={journey} />
          ))}
        </tbody>
      </table>
      <Pagination
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        currentPage={currentPage}
        limitPerPage={limitPerPage}
      />
    </div>
  );
}

export default JourneyList;
