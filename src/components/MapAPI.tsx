import React, { useEffect, useState } from 'react';
import { YMaps, Map, ZoomControl, RulerControl, GeoObject } from '@pbe/react-yandex-maps';
import Ship from './Ship';
import { IShip } from '../models/ship';
import CircularProgress from '@mui/material/CircularProgress';
import { useGetShipsQuery } from '../store/shipApi/shipApi';
import Route from './Route';
import { routeProgressOnRoute } from '../utils/routeProgress';
import { shipTrackAPI } from '../models/shipTrack';
import axios from 'axios';
import Track from './Track';
import { RoutePoints } from '../mock/RoutePoints';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { getCorrectFormatDateWithTime } from '../utils/getDate';
import { dateInSchedule } from '../utils/dateInSchedule';
import SliderBar from './SliderBar';
import { IRequest } from '../models/shipApi';
import { useGetRequestsQuery } from '../store/api/api';
import { setSelectedRequest } from '../store/filters/filtersSlice';

const MapAPI: React.FC = () => {
  const { data: requests } = useGetRequestsQuery(null);
  const { selectedDate } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  if (!requests || !selectedDate) {
    return (
      <div className="w-full flex justify-center mt-56">
        <CircularProgress />
      </div>
    );
  }

  const mapObj: IRequest[] = requests.filter((request: IRequest) =>
    dateInSchedule(selectedDate, request.date_begin, request.date_end),
  );

  return (
    <>
      <YMaps>
        <Map
          width="100%"
          height="100vh"
          options={{ minZoom: 4 }}
          defaultState={{
            center: [70.183542, 73.429568],
            zoom: 6,
          }}>
          <Route />
          {mapObj.length !== 0 &&
            mapObj.map((obj: IRequest) => (
              <GeoObject
                key={obj.id}
                style={{ display: 'none' }}
                geometry={{
                  type: 'Point',
                  coordinates: RoutePoints.find((el) => el.id === Number(obj.point_begin))
                    ?.coordinates,
                }}
                options={{
                  iconLayout: 'default#image',
                  iconImageHref: obj.is_ledocol ? '/img/ledocol.svg' : '/img/ship.svg',
                  iconImageSize: [40, 40],
                  iconOffset: [0, 25],
                }}
                onClick={() => dispatch(setSelectedRequest(obj))}
              />
            ))}
          <ZoomControl />
          <RulerControl />
        </Map>
      </YMaps>
      <SliderBar />
    </>
  );
};

export default MapAPI;
