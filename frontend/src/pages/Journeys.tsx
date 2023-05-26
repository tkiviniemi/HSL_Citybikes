import { useState } from 'react';
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
    setSortKey(key);
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    console.log(sortKey, sortDirection);
    refetch();
  };

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: 'journeys',
    queryFn: () => getJourneys(sortKey, sortDirection),
  });

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
