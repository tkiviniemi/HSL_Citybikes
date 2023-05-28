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
    <thead>
      <tr className="flex flex-row gap-4 font-bold">
        {keys.map((key) => (
          <th
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
