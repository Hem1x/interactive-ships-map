import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Schedule from './components/Schedule';
import InteractiveMap from './components/InteractiveMap';

const App = () => {
  return (
    <div className="bg-sky-100 flex">
      <NavBar />

      <div className="flex-1">
        <Routes>
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
