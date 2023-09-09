import React from 'react';
import { routeLines } from '../mock/route';
import { GeoObject } from '@pbe/react-yandex-maps';

const Route = () => {
  return (
    <div>
      {routeLines.features.map((el) => (
        <GeoObject
          key={el.properties.id}
          {...el}
          options={{
            geodesic: true,
            strokeWidth: 1,
            strokeColor: '#000',
          }}
        />
      ))}
    </div>
  );
};

export default Route;
