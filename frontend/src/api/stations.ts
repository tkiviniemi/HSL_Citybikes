import { Station } from '../interfaces/station.interface';

type StationSortKey = keyof Station;
type SortOrder = 'asc' | 'desc';

export const getStations = async (
  sortKey: StationSortKey,
  sortOrder: SortOrder,
  currentPage: number,
  limitPerPage: number
) => {
  const res = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }/api/stations?page=${currentPage}&limit=${limitPerPage}&sortKey=${sortKey}&sortOrder=${sortOrder}`
  );
  return await res.json();
};

export const getStationById = async (id: number) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/stations/${id}`);
  return await res.json();
};
