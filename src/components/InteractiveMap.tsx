import React, { useState } from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { Drawer } from '@mui/material';
import { IShip } from '../models/ship';
import axios from 'axios';

const InteractiveMap: React.FC = () => {
  const [selectedShip, setSelectedShip] = useState<IShip | null>(null);
  const [data, setData] = useState<IShip[]>([]);

  React.useEffect(() => {
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
    <>
      <YMaps>
        <Map
          width="100vw"
          height="100vh"
          defaultState={{
            center: [16.91071, 37.5738],
            zoom: 3,
          }}>
          {data.map((el: IShip) => (
            <Ship key={el.id} obj={el} setSelectedShip={setSelectedShip} />
          ))}
          {selectedShip && (
            <>
              <GeoObject
                geometry={{
                  type: 'Point',
                  coordinates: [
                    selectedShip.route.from.coordinates.N,
                    selectedShip.route.from.coordinates.E,
                  ],
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: '/img/port.svg',
                  iconImageSize: [selectedShip.size.width, selectedShip.size.length],
                  iconOffset: [2, -25],
                }}
              />
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
            </>
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
