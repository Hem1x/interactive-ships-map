import React from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { IShip } from '../models/ship';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetShipsQuery } from '../store/shipApi/shipApi';
import { useAppSelector } from '../store/hooks';

const MapAPI: React.FC = () => {
  const { selectedShip } = useAppSelector((state) => state.selectedShip);
  const { data: ships } = useGetShipsQuery(null);

  if (!ships) {
    return <CircularProgress />;
  }

  return (
    <YMaps>
      <Map
        width="100%"
        height="100vh"
        options={{ minZoom: 5 }}
        defaultState={{
          center: [70.183542, 73.429568],
          zoom: 6,
        }}>
        {ships.map((el: IShip) => (
          <Ship key={el.id} obj={el} />
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
                iconOffset: [5, -20],
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
  );
};

export default MapAPI;
