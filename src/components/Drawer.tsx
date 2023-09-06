import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IShip } from '../models/ship';

interface DrawerProps {
  selectedShip: IShip | null;
  setSelectedShip: (value: IShip | null) => void;
}

const Drawer: React.FC<DrawerProps> = ({ selectedShip, setSelectedShip }) => {
  return (
    <AnimatePresence>
      {selectedShip && (
        <motion.div
          initial={{ x: '100%' }}
          exit={{ x: '100%' }}
          animate={{ x: 0 }}
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
  );
};

export default Drawer;
