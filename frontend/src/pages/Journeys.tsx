import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import JourneyList from '../components/JourneyList';
import LoadingSpinner from '../components/LoadingSpinner';

import { getJourneys } from '../api/journeys';

import { Journey } from '../interfaces/journey.interface';
type SortKey = keyof Journey;
type SortOrder = 'asc' | 'desc';
type PageChange = 'next' | 'prev' | 'reset';

function Journeys() {
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortDirection, setSortDirection] = useState<SortOrder>('asc');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [limitPerPage, setLimitPerPage] = useState<number>(10);

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'journeys',
    queryFn: () =>
      getJourneys(sortKey, sortDirection, currentPage, limitPerPage),
  });

  const handleSortingChange = (key: SortKey) => {
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
    <JourneyList
      journeyData={data.journeyData}
      handleSortingChange={handleSortingChange}
      handlePageChange={handlePageChange}
      handleLimitChange={handleLimitChange}
    />
  );
}

export default Journeys;
