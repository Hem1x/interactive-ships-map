import { GeoObject } from '@pbe/react-yandex-maps';
import Drawer from '@mui/material/Drawer';
import React, { useState } from 'react';
import { IShip } from '../models/ship';

interface ShipProps {
  obj: IShip;
  setSelectedShip: (value: IShip) => void;
}

const Ship: React.FC<ShipProps> = ({ obj, setSelectedShip }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            bottom: 20,
            right: 'calc(50vw - 100px)',
            zIndex: 2000,
            color: 'white',
            fontWeight: 500,
            padding: '10px 20px',
            backgroundColor: '#043189',
          }}>
          Судно: {obj.name}
        </div>
      )}

      <GeoObject
        key={obj.id}
        style={{ display: 'none' }}
        geometry={{
          type: 'Point',
          coordinates: [obj.coordinates.N, obj.coordinates.E],
        }}
        options={{
          iconLayout: 'default#image',
          iconImageHref: '/img/shipIcon.svg',
          iconImageSize: [obj.size.width, obj.size.length],
          iconOffset: [2, -15],
        }}
        onClick={() => setSelectedShip(obj)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
};

export default Ship;
