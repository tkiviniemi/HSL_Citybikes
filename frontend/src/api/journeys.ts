import { Journey } from '../interfaces/journey.interface';

type SortKey = keyof Journey;
type SortOrder = 'asc' | 'desc';

export const getJourneys = async (
  sortKey: SortKey,
  sortOrder: SortOrder,
  currentPage: number,
  limitPerPage: number
) => {
  if (!sortKey) sortKey = 'id';
  if (!sortOrder) sortOrder = 'asc';

  const res = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/api/journeys?page=${currentPage}&limit=${limitPerPage}&sortKey=${sortKey}&sortOrder=${sortOrder}`
  );
  return await res.json();
};
