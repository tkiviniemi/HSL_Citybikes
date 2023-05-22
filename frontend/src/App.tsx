import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Journeys from './pages/Journeys';
import Stations from './pages/Stations';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/stations" element={<Stations />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
