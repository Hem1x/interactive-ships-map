import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Schedule from './page/Schedule';
import InteractiveMap from './page/InteractiveMap';
import Home from './page/Home';

const App = () => {
  return (
    <div className="bg-sky-100 flex">
      <NavBar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<InteractiveMap />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
