import JourneyListItem from './JourneyListItem';
import { Journey } from '../interfaces/journey.interface';
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
        <thead className="border-b-2 border-cyan-800 text-left text-sm uppercase">
          <tr role="header">
            {keys.map((key) => (
              <th
                scope="col"
                className="p-3 font-semibold"
                key={key.id}
                onClick={() => handleSortingChange(key.id as keyof Journey)}
              >
                {key.name}
              </th>
            ))}
          </tr>
        </thead>
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
