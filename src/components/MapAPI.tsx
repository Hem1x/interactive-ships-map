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
import { useGetRequestsQuery } from '../store/api/api';
import { useAppSelector } from '../store/hooks';
import { getCorrectFormatDateWithTime } from '../utils/getDate';
import { dateInSchedule } from '../utils/dateInSchedule';
import SliderBar from './SliderBar';

const MapAPI: React.FC = () => {
  const { data: ships } = useGetShipsQuery(null);
  const { data: requests } = useGetRequestsQuery(null);
  const { selectedDate } = useAppSelector((state) => state.filter);

  if (!requests || !selectedDate) {
    return (
      <div className="w-full flex justify-center mt-56">
        <CircularProgress />
      </div>
    );
  }

  const mapObj = requests.filter((request) =>
    dateInSchedule(
      selectedDate,
      getCorrectFormatDateWithTime(request.date_begin),
      getCorrectFormatDateWithTime(request.date_end),
    ),
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
          {/* <Track /> */}
          <Route />
          {/* {ships.map((el: IShip) => (
          <Ship key={el.id} obj={el} />
        ))} */}
          <ZoomControl />
          <RulerControl />
        </Map>
      </YMaps>
      <SliderBar />
    </>
  );
};

export default MapAPI;
