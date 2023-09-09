import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import { icon, ledocol, logoCompany } from '../assets';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { setSelectedRequest } from '../store/filters/filtersSlice';
import { RoutePoints } from '../mock/RoutePoints';
import { getCorrectFormatDateWithTime } from '../utils/getDate';

const ScheduleDrawer: React.FC = () => {
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
            <div className="w-full flex items-center gap-1 mb-5">
              <img src={logoCompany} alt="logo" />
              <h1 className="text-xl font-semibold">Информация о заявке</h1>
            </div>
            <hr className="mb-5" />
            <div className="mb-7">
              <div className="flex items-center gap-5 mb-5">
                <img className="w-9" src={ledocol} alt="" />
                <h1 className="font-semibold text-xl">"{selectedRequest.name}"</h1>
              </div>
              <div>
                <p>
                  <b>IMO:</b> {selectedRequest.imo}
                </p>
                <p>
                  <b>Ледовый класс:</b> {selectedRequest.led_class}
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
                <p className="opacity-50 float-right">Откуда</p>
                <p>
                  <b>Время:</b>
                  <div className="ml-5">
                    {' '}
                    {getCorrectFormatDateWithTime(
                      selectedRequest.date_begin,
                    ).getDate()}{' '}
                    {getCorrectFormatDateWithTime(
                      selectedRequest.date_begin,
                    ).toLocaleString('RU-ru', { month: 'short' })}{' '}
                    {getCorrectFormatDateWithTime(
                      selectedRequest.date_begin,
                    ).getFullYear()}
                  </div>
                </p>
                <p>
                  <b>Координаты:</b>
                  <br />
                  <div className="ml-5">
                    {RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_begin,
                    )?.coordinates![0].toFixed(5)}
                    {', '}
                    {RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_begin,
                    )?.coordinates![0].toFixed(5)}
                  </div>
                </p>
              </div>
              <div>
                <p className="opacity-50 float-right">Куда</p>
                <p>
                  <b>Время:</b>
                  <div className="ml-5">
                    {getCorrectFormatDateWithTime(selectedRequest.date_end).getDate()}{' '}
                    {getCorrectFormatDateWithTime(
                      selectedRequest.date_end,
                    ).toLocaleString('RU-ru', { month: 'short' })}{' '}
                    {getCorrectFormatDateWithTime(selectedRequest.date_end).getFullYear()}
                  </div>
                </p>
                <p>
                  <b>Координаты:</b>
                  <br />
                  <div className="ml-5">
                    {RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_end,
                    )?.coordinates![0].toFixed(5)}
                    {', '}
                    {RoutePoints.find(
                      (el) => el.id.toString() === selectedRequest.point_end,
                    )?.coordinates![0].toFixed(5)}
                  </div>
                </p>
              </div>
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

export default ScheduleDrawer;
