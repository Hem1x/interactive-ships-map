import React from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { IShip } from '../models/ship';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetShipsQuery } from '../store/shipApi/shipApi';

interface MapProps {
  selectedShip: IShip | null;
  setSelectedShip: (value: IShip | null) => void;
}

const MapAPI: React.FC<MapProps> = ({ selectedShip, setSelectedShip }) => {
  const { data: ships } = useGetShipsQuery(null);

  if (!ships) {
    return <CircularProgress />;
  }

  return (
    <YMaps>
      <Map
        width="100%"
        height="100vh"
        options={{ minZoom: 3 }}
        defaultState={{
          center: [16.91071, 37.5738],
          zoom: 3,
        }}>
        {ships.map((el: IShip) => (
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
  );
};

export default MapAPI;
