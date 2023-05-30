import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';

import StationList from '../components/StationList';
import LoadingSpinner from '../components/LoadingSpinner';

import { getStations } from '../api/stations';
import { Station } from '../interfaces/station.interface';

type StationSortKey = keyof Station;
type SortOrder = 'asc' | 'desc';
type PageChange = 'next' | 'prev';

function Stations() {
  const [sortKey, setSortKey] = useState<StationSortKey>('station_id');
  const [sortDirection, setSortDirection] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limitPerPage, setLimitPerPage] = useState<number>(10);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'stations',
    queryFn: () =>
      getStations(sortKey, sortDirection, currentPage, limitPerPage),
  });

  const handleSortingChange = (key: StationSortKey) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const handlePageChange = (pageChange: PageChange) => {
    if (pageChange === 'next') {
      setCurrentPage(currentPage + 1);
    } else if (pageChange === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleLimitChange = (limitChange: number) => {
    setLimitPerPage(limitChange);
    setCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  }, [sortKey, sortDirection, currentPage, limitPerPage, refetch]);

  if (isLoading) return <LoadingSpinner />;

  if (error) return <div>An error has occurred</div>;

  return (
    <div className="flex justify-center md:py-6">
      <StationList
        stationData={data.stationData}
        handleSortingChange={handleSortingChange}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        currentPage={currentPage}
        limitPerPage={limitPerPage}
      />
    </div>
  );
}

export default Stations;
