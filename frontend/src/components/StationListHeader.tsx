import { Station } from '../interfaces/station.interface';
type StationSortKey = keyof Station;

function JourneyListHeader({
  data,
  handleSortingChange,
}: {
  data: { id: string; name: string }[];
  handleSortingChange: (key: StationSortKey) => void;
}) {
  return (
    <thead className="border-b-2 border-cyan-800 text-left text-sm uppercase">
      <tr>
        {data.map((key) => (
          <th
            className="p-3 font-semibold"
            key={key.id}
            onClick={() => handleSortingChange(key.id as keyof Station)}
          >
            {key.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default JourneyListHeader;
