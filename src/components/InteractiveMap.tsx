import React, { useState, useEffect } from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { IShip } from '../models/ship';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveMapProps {
  height: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ height }) => {
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
    <div style={{ position: 'relative' }}>
      <YMaps>
        <Map
          width="100%"
          height={height}
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

      <AnimatePresence>
        {selectedShip && (
          <motion.div
            initial={{ x: '100%' }} // начальное положение (с правой стороны)
            exit={{ x: '100%' }} // положение при закрытии (с правой стороны)
            animate={{ x: 0 }} // конечное положение (видимое на экране)
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 40,
            }}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
            }}>
            <div
              style={{
                width: 'auto',
                height: '100vh',
                backgroundColor: '#fff',
              }}>
              <p>Name: {selectedShip.name}</p>
              <p>
                Coordinates: {selectedShip.coordinates.N}° {selectedShip.coordinates.E}°
              </p>
              <p>
                <span>direction: {selectedShip.directionDegree}°</span>
              </p>
              <p>Speed: {selectedShip.speed} kn</p>{' '}
              <button onClick={() => setSelectedShip(null)}>Close</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default InteractiveMap;
