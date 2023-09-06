import React, { useState } from 'react';
import { IShip } from '../models/ship';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';

interface InteractiveMapProps {
  data: IShip[];
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ data }) => {
  const [selectedShip, setSelectedShip] = useState<IShip | null>(null);

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI data={data} selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
      <Drawer selectedShip={selectedShip} setSelectedShip={setSelectedShip} />
    </div>
  );
};

export default InteractiveMap;
