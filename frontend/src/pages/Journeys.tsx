import { useQuery } from 'react-query';
import JourneyList from '../components/JourneyList';

import { getJourneys } from '../api/journeys';

function Journeys() {
  const { isLoading, error, data } = useQuery({
    queryKey: 'journeys',
    queryFn: () => getJourneys(),
  });

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>An error has occurred</div>;

  return <JourneyList journeyData={data.journeyData} />;
}

export default Journeys;
