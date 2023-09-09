import React from 'react';
import MapAPI from '../components/MapAPI';
import ScheduleDrawer from '../components/Drawer';

const InteractiveMap: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <MapAPI />
      <ScheduleDrawer />
    </div>
  );
};

export default InteractiveMap;
