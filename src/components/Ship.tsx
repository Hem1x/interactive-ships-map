import { GeoObject } from '@pbe/react-yandex-maps';
import React from 'react';
import { IShip } from '../models/ship';

interface ShipProps {
  obj: IShip;
  setOpen: (value: boolean) => void;
}

const Ship: React.FC<ShipProps> = ({ obj, setOpen }) => {
  return (
    <GeoObject
      key={obj.id}
      geometry={{
        type: 'Point',
        coordinates: [obj.coordinates.N, obj.coordinates.E],
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/img/shipIcon.svg',
        iconImageSize: [obj.size.width, obj.size.length],
        iconImageOffset: [20, -40],
        iconRotation: 300,
      }}
      onClick={() => setOpen(true)}
    />
  );
};

export default Ship;
