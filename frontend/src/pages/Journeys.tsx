import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import JourneyList from '../components/JourneyList';

import { getJourneys } from '../api/journeys';

import { Journey } from '../interfaces/journey.interface';
type SortKey = keyof Journey;
type SortOrder = 'asc' | 'desc';

function Journeys() {
  const [sortKey, setSortKey] = useState<SortKey>('id');
  const [sortDirection, setSortDirection] = useState<SortOrder>('asc');

  const handleSortingChange = (key: SortKey) => {
    if (key === sortKey) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortDirection('asc');
    }
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'journeys',
    queryFn: () => getJourneys(sortKey, sortDirection),
  });

  useEffect(() => {
    refetch();
  }, [sortKey, sortDirection, refetch]);

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return (
    <JourneyList
      journeyData={data.journeyData}
      handleSortingChange={handleSortingChange}
    />
  );
}

export default Journeys;
