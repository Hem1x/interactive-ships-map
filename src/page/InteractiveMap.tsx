import React from 'react';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';
import SliderBar from '../components/SliderBar';

const InteractiveMap: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <SliderBar />
      <MapAPI />
      <Drawer />
    </div>
  );
};

export default InteractiveMap;
