import { GeoObject } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import { IShip } from '../models/ship';
import { motion, AnimatePresence } from 'framer-motion';

interface ShipProps {
  obj: IShip;
  setSelectedShip: (value: IShip) => void;
}

const Ship: React.FC<ShipProps> = ({ obj, setSelectedShip }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div
              style={{
                position: 'absolute',
                bottom: 20,
                right: 'calc(50vw - 100px)',
                zIndex: 2000,
                color: 'white',
                fontWeight: 500,
                padding: '10px 20px',
                backgroundColor: '#000',
                borderRadius: 5,
              }}>
              Судно: {obj.name}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
