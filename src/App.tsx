import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Schedule from './page/Schedule';
import InteractiveMap from './page/InteractiveMap';
import Home from './page/Home';
import { useEffect, useState } from 'react';
import { IShip } from './models/ship';
import axios from 'axios';
import { randomColor } from './utils/randomColor';

const App = () => {
  const [data, setData] = useState<IShip[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get<IShip[]>(
          'https://64f8dbf9824680fd218025f0.mockapi.io/ships',
        );
        const dataWithColor = response.data.map((el) => ({
          ...el,
          color: randomColor(),
        }));
        setData(dataWithColor);
      } catch (error) {
        console.log((error as Error).message);
      }
    })();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

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
