import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Schedule from './page/Schedule';
import InteractiveMap from './page/InteractiveMap';
import Home from './page/Home';
import { useEffect, useState } from 'react';
import { IShip } from './models/ship';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState<IShip[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get('https://alexbobr.ru/test_json');
        setData([...data, response.data]);
      } catch (error) {
        console.log((error as Error).message);
      }
    })();
  }, []);

  return (
    <div className="bg-sky-100 flex">
      <NavBar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<InteractiveMap data={data} />} />
          <Route path="/schedule" element={<Schedule data={data} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
