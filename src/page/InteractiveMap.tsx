import React from 'react';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';

const InteractiveMap: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI />
      <Drawer />
    </div>
  );
};

export default InteractiveMap;
