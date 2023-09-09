import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { icon, ledocol, logoCompany, ship } from '../assets';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedRequest } from '../store/filters/filtersSlice';
import { RoutePoints } from '../mock/RoutePoints';
import { getCorrectFormatDateWithTime, getValidData } from '../utils/getDate';
import { GeoObject } from '@pbe/react-yandex-maps';

const Drawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedRequest } = useAppSelector((state) => state.filter);

  return (
    <AnimatePresence>
      {selectedRequest && (
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
          <div className="w-auto h-screen py-[2rem] px-[2rem] bg-white  overflow-auto">
            <div className="w-full flex items-center gap-4 mb-5">
              <img className="w-8" src={logoCompany} alt="logo" />
              <h1 className="text-xl font-semibold opacity-50">Информация о заявке</h1>
            </div>
            <hr className="mb-5" />
            <div className="mb-7">
              <div className="flex items-center gap-5 mb-5">
                <img
                  className="w-9"
                  src={selectedRequest.is_ledocol ? '/img/ledocol.svg' : '/img/ship.svg'}
                  alt=""
                />
                <h1 className="font-semibold text-xl">"{selectedRequest.name}"</h1>
              </div>
              <div>
                <div>
                  <b>IMO:</b> {selectedRequest.imo}
                </div>
                <p>
                  <b>Ледовый класс:</b> "{selectedRequest.led_class}"
                </p>
                <p>
                  <b>Скорость:</b> {selectedRequest.speed} узлов
                </p>
              </div>
            </div>
            <hr className="mb-5" />
            <div className="mb-7">
              <div className="flex items-center gap-5 mb-5">
                <img src={icon} alt="" />
                <h1 className="font-semibold text-xl">Маршрут</h1>
              </div>
              <div className="mb-5">
                <p className="opacity-50">Откуда</p>
                <div>
                  <b>Время:</b>{' '}
                  {getCorrectFormatDateWithTime(selectedRequest.date_begin).getDate()}{' '}
                  {getCorrectFormatDateWithTime(
                    selectedRequest.date_begin,
                  ).toLocaleString('RU-ru', { month: 'short' })}{' '}
                  {getCorrectFormatDateWithTime(selectedRequest.date_begin).getFullYear()}
                  {', '}
                  {getValidData(
                    getCorrectFormatDateWithTime(selectedRequest.date_begin).getHours(),
                  ) +
                    ':' +
                    getValidData(
                      getCorrectFormatDateWithTime(
                        selectedRequest.date_begin,
                      ).getMinutes(),
                    )}
                </div>
                <div>
                  <b>Порт:</b>{' '}
                  {
                    RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_begin,
                    )?.name
                  }
                </div>
                <div>
                  <b>Loc:</b>{' '}
                  {RoutePoints.find(
                    (el) => el.id.toString() === selectedRequest.point_begin,
                  )?.coordinates![0].toFixed(5)}
                  {', '}
                  {RoutePoints.find(
                    (el) => el.id.toString() === selectedRequest.point_begin,
                  )?.coordinates![1].toFixed(5)}
                </div>
              </div>
              <div>
                <p className="opacity-50">Куда</p>
                <div>
                  <b>Время:</b>{' '}
                  {getCorrectFormatDateWithTime(selectedRequest.date_end).getDate()}{' '}
                  {getCorrectFormatDateWithTime(selectedRequest.date_end).toLocaleString(
                    'RU-ru',
                    { month: 'short' },
                  )}{' '}
                  {getCorrectFormatDateWithTime(selectedRequest.date_end).getFullYear()}
                  {', '}
                  {getValidData(
                    getCorrectFormatDateWithTime(selectedRequest.date_end).getHours(),
                  ) +
                    ':' +
                    getValidData(
                      getCorrectFormatDateWithTime(selectedRequest.date_end).getMinutes(),
                    )}
                </div>
                <div>
                  <b>Порт:</b>{' '}
                  {
                    RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_end,
                    )?.name
                  }
                </div>
                <div>
                  <b>Loc:</b>{' '}
                  {RoutePoints.find(
                    (el) => el.id.toString() === selectedRequest.point_end,
                  )?.coordinates![0].toFixed(5)}
                  {', '}
                  {RoutePoints.find(
                    (el) => el.id.toString() === selectedRequest.point_end,
                  )?.coordinates![1].toFixed(5)}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center mb-7">
              <h1 className="text-lg  font-bold">Маршрутное время</h1>
              <h1 className="text-[2rem]  font-boldw">
                ~{' '}
                {Math.ceil(
                  (getCorrectFormatDateWithTime(selectedRequest.date_end).getTime() -
                    getCorrectFormatDateWithTime(selectedRequest.date_begin).getTime()) /
                    3600000,
                )}{' '}
                ч
              </h1>
            </div>

            <button
              className="w-full bg-black text-white px-4 py-3 font-semibold text-sm hover:bg-blue-500 transition-all duration-150 ease-in-out rounded-xl"
              onClick={() => dispatch(setSelectedRequest(undefined))}>
              Закрыть
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
