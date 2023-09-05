import React, { useState } from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import { data } from '../data';
import Ship from './Ship';
import { Drawer } from '@mui/material';
import { IShip } from '../models/ship';

const InteractiveMap: React.FC = () => {
  const [selectedShip, setSelectedShip] = useState<IShip | null>(null);

  React.useEffect(() => {
    console.log(selectedShip);
  }, [selectedShip]);

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
            <Ship key={el.id} obj={el} setSelectedShip={setSelectedShip} />
          ))}
          {selectedShip && (
            <GeoObject
              geometry={{
                type: 'LineString',
                coordinates: selectedShip.route.history,
              }}
              options={{
                geodesic: true,
                strokeWidth: 5,
                strokeColor: '#F008',
              }}
            />
          )}
          <ZoomControl />
          <RulerControl />
        </Map>
      </YMaps>

      {selectedShip && (
        <Drawer
          anchor="right"
          open={!!selectedShip}
          onClose={() => setSelectedShip(null)}
          hideBackdrop={true}
          ModalProps={{ container: document.getElementById('root') }}>
          <p>Name: {selectedShip.name}</p>
          <p>
            Coordinates: {selectedShip.coordinates.N}° {selectedShip.coordinates.E}°
          </p>
          <p>
            <span>direction: {selectedShip.directionDegree}°</span>
          </p>
          <p>Speed: {selectedShip.speed} kn</p>{' '}
          <button onClick={() => setSelectedShip(null)}>Close</button>
        </Drawer>
      )}
    </>
  );
};

export default InteractiveMap;
