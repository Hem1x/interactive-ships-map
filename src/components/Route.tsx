import React from 'react';
import { routeLines } from '../mock/route';
import { GeoObject } from '@pbe/react-yandex-maps';

const Route = () => {
  return (
    <div>
      {routeLines.features.map((el) => (
        <GeoObject
          geometry={{
            ...el.geometry,
          }}
          options={{
            geodesic: true,
            strokeWidth: 1,
            strokeColor: '#F008',
          }}
        />
      ))}
    </div>
  );
};

export default Route;
