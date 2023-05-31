import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Journeys from './pages/Journeys';
import Stations from './pages/Stations';
import Navbar from './components/Navbar';
import SingleStation from './pages/SingleStation';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/stations" element={<Stations />} />
          <Route path="/stations/:station_id" element={<SingleStation />} />
          <Route path="*" element={<Journeys />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
