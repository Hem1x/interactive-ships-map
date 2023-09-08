import { GeoObject } from '@pbe/react-yandex-maps';
import React, { useState } from 'react';
import { IShip, shipEnum } from '../models/ship';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch } from '../store/hooks';
import { setSelectedShip } from '../store/selectedSlip/selectedShip';

interface ShipProps {
  obj: IShip;
}

const Ship: React.FC<ShipProps> = ({ obj }) => {
  const [isHovered, setHovered] = useState(false);
  const dispatch = useAppDispatch();

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
          iconImageHref:
            obj.type === shipEnum.ship ? '/img/ship.svg' : '/img/ledocol.svg',
          iconImageSize: [40, 40],
          iconOffset: [0, 25],
        }}
        onClick={() => dispatch(setSelectedShip(obj))}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
    </>
  );
};

export default Ship;
