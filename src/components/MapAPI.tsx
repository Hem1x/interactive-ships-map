import React from 'react';
import { YMaps, Map, ZoomControl, RulerControl } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { IShip } from '../models/ship';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetShipsQuery } from '../store/shipApi/shipApi';
import Route from './Route';

const MapAPI: React.FC = () => {
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
        <Route />
        {ships.map((el: IShip) => (
          <Ship key={el.id} obj={el} />
        ))}
        <ZoomControl />
        <RulerControl />
      </Map>
    </YMaps>
  );
};

export default MapAPI;
