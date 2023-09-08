import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IShip, shipEnum } from '../models/ship';
import { icon, logoCompany } from '../assets';
import { getDate } from '../utils/getDate';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedShip } from '../store/selectedSlip/selectedShip';

const Drawer: React.FC = () => {
  const { selectedShip } = useAppSelector((state) => state.selectedShip);
  const dispatch = useAppDispatch();

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
          className="absolute top-0 right-0">
          <div className="w-auto h-screen py-[3rem] px-[2rem] bg-white">
            <div className="w-full flex items-center gap-1 mb-5">
              <img src={logoCompany} alt="logo" />
              <h1 className="text-xl font-semibold">Информация о корабле</h1>
            </div>
            <hr className="mb-5" />
            <div className="mb-12">
              <div className="flex items-center gap-5 mb-5">
                <img src={icon} alt="" />
                <h1 className="font-semibold text-xl">
                  {selectedShip.type === shipEnum.ship ? 'Корабль' : 'Ледокол'}
                </h1>
              </div>
              <div>
                <p>
                  <b>Название:</b> {selectedShip.name}
                </p>
                <p>
                  <b>Размер:</b> {selectedShip.size.length} x {selectedShip.size.width}{' '}
                  (м)
                </p>
                <p>
                  <b>Курс:</b> {selectedShip.directionDegree}°
                </p>
                <p>
                  <b>Скорость:</b> {selectedShip.speed} узлов
                </p>
                <p>
                  <b>Статус:</b> {selectedShip.status}
                </p>
                <p>
                  <b>Координаты:</b> {selectedShip.coordinates.N}°{' '}
                  {selectedShip.coordinates.E}°
                </p>
              </div>
            </div>
            <div className="mb-12">
              <div className="flex items-center gap-5 mb-5">
                <img src={icon} alt="" />
                <h1 className="font-semibold text-xl">Маршрут</h1>
              </div>
              <div className="mb-5">
                <p className="opacity-50">Откуда</p>
                <p>
                  <b>Город:</b> {selectedShip.route.from.city}
                </p>
                <p>
                  <b>Порт:</b> {selectedShip.route.from.port}
                </p>
                <p>
                  <b>Время отправления:</b>{' '}
                  {getDate(new Date(selectedShip.route.from.time))}
                </p>
              </div>
              <div>
                <p className="opacity-50">Куда</p>
                <p>
                  <b>Город:</b> {selectedShip.route.to.city}
                </p>
                <p>
                  <b>Порт:</b> {selectedShip.route.to.port}
                </p>
                <p>
                  <b>Время прибытия:</b> {getDate(new Date(selectedShip.route.to.time))}
                </p>
              </div>
            </div>

            <button
              className="w-[240px] bg-black text-white px-4 py-3 font-semibold text-sm hover:bg-blue-500 transition-all duration-150 ease-in-out rounded-xl absolute bottom-10 left-12"
              onClick={() => dispatch(setSelectedShip(null))}>
              Закрыть
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
