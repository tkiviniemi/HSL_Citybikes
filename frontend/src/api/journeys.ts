export const getJourneys = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/api/journeys?page=0&limit=10`
  );
  return await res.json();
};
