import { Journey } from '../interfaces/journey.interface';
type SortKey = keyof Journey;

function ListHeader({
  handleSortingChange,
}: {
  handleSortingChange: (key: SortKey) => void;
}) {
  // THESE HARDCODED KEYS AREN'T OPTIMAL, BUT IT'S A STARTING POINT
  const keys = [
    { id: 'id', name: 'ID' },
    { id: 'departure_station_name', name: 'Departure Station' },
    { id: 'departure_time', name: 'Departure Time' },
    { id: 'return_station_name', name: 'Return Station' },
    { id: 'return_time', name: 'Return Time' },
    { id: 'covered_distance', name: 'Covered Distance' },
    { id: 'duration', name: 'Duration' },
  ];

  return (
    <thead className="border-b-2 border-slate-900 text-left text-sm uppercase">
      <tr>
        {keys.map((key) => (
          <th
            className="p-3 font-semibold"
            key={key.id}
            onClick={() => handleSortingChange(key.id as keyof Journey)}
          >
            {key.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default ListHeader;
