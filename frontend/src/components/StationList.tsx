import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import StationListItem from './StationListItem';
import { Station } from '../interfaces/station.interface';
import Pagination from './Pagination';

type StationSortKey = keyof Station;
type PageChange = 'next' | 'prev';

function StationList({
  stationData,
  handleSortingChange,
  handlePageChange,
  handleLimitChange,
  currentPage,
  limitPerPage,
}: {
  stationData: Station[];
  handleSortingChange: (key: StationSortKey) => void;
  handlePageChange: (pageChange: PageChange) => void;
  handleLimitChange: (limitChange: number) => void;
  currentPage: number;
  limitPerPage: number;
}) {
  const [station_id, setStation_id] = useState<number>(0);

  const navigate = useNavigate();

  const handleStationIdChange = (id: number) => {
    setStation_id(id);
  };

  useEffect(() => {
    if (station_id !== 0) {
      navigate(`/stations/${station_id}`);
    }
  }, [station_id, navigate]);

  const keys = [
    { id: 'station_id', name: 'ID' },
    { id: 'name_fi', name: 'Station Name' },
    { id: 'address_fi', name: 'Address' },
    { id: 'city_fi', name: 'City' },
  ];

  return (
    <div className="relative overflow-x-auto rounded-lg bg-slate-100 shadow-md">
      <table className="text-md table-fixed">
        <thead className="border-b-2 border-cyan-800 text-left text-sm uppercase">
          <tr>
            {keys.map((key) => (
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
        <tbody>
          {stationData.map((station: Station) => (
            <StationListItem
              key={station.station_id}
              station={station}
              handleStationIdChange={handleStationIdChange}
            />
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

export default StationList;
