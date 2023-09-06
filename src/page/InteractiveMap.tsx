import React, { useState, useEffect } from 'react';
import { IShip } from '../models/ship';
import axios from 'axios';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';

const InteractiveMap: React.FC = () => {
  const [selectedShip, setSelectedShip] = useState<IShip | null>(null);
  const [data, setData] = useState<IShip[]>([]);

  useEffect(() => {
    (async function () {
      try {
        const response = await axios.get('http://alexbobr.ru:8000/test_json');
        setData([...data, response.data]);
      } catch (error) {
        console.log((error as Error).message);
      }
    })();
  }, []);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI data={data} selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
      <Drawer selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
    </div>
  );
};

export default InteractiveMap;
