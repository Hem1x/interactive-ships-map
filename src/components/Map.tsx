import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { YMaps, Map, ZoomControl } from '@pbe/react-yandex-maps';
import { data } from '../data';
import Ship from './Ship';

const InteractiveMap: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <YMaps>
        <Map
          width="100vw"
          height="100vh"
          defaultState={{
            center: [16.91071, 37.5738],
            zoom: 3,
          }}>
          {data.map((el) => (
            <Ship key={el.id} obj={el} setOpen={setOpen} />
          ))}

          <ZoomControl />
        </Map>
      </YMaps>

      <Drawer anchor="right" open={isOpen} onClose={() => setOpen(false)}>
        bfhsdjbhfs
        <button onClick={() => setOpen(false)}>Close</button>
      </Drawer>
    </>
  );
};

export default InteractiveMap;
