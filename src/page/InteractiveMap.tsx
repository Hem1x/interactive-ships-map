import React from 'react';
import MapAPI from '../components/MapAPI';
import Drawer from '../components/Drawer';
import SliderBar from '../components/SliderBar';
import ScheduleDrawer from '../components/ScheduleDrawer';

const InteractiveMap: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI />
      <ScheduleDrawer />
    </div>
  );
};

export default InteractiveMap;
