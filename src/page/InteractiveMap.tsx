import React, { useState } from 'react';
import { IShip } from '../models/ship';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';

const InteractiveMap: React.FC = () => {
  const [selectedShip, setSelectedShip] = useState<IShip | null>(null);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
      <Drawer selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
    </div>
  );
};

export default InteractiveMap;
