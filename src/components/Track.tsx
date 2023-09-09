import React, { useEffect, useState } from 'react';
import { shipTrack, shipTrackAPI } from '../models/shipTrack';
import axios from 'axios';
import { getCorrectFormatDate } from '../utils/getDate';
import { routeLines } from '../mock/route';
import { useGetTracksQuery } from '../store/api/api';
import { RoutePoints } from '../mock/RoutePoints';
import { GeoObject } from '@pbe/react-yandex-maps';
import CircularProgress from '@mui/material/CircularProgress';

const Track = () => {
  const { data } = useGetTracksQuery(null);

  if (!data) {
    return <CircularProgress />;
  }

  const validData: shipTrack = {
    ...data[2],
    point_begin: RoutePoints.find((el) => el.id === Number(data[2].point_begin))
      ?.coordinates,
    point_end: RoutePoints.find((el) => el.id === Number(data[2].point_end))?.coordinates,
    date_begin: new Date(getCorrectFormatDate(data[2].date_begin)),
    date_end: new Date(getCorrectFormatDate(data[2].date_end)),
  };

  return (
    <GeoObject
      geometry={{
        type: 'Point',
        coordinates: validData.point_begin,
      }}
      options={{
        iconLayout: 'default#image',
        iconImageHref: '/img/ship.svg',
        iconImageSize: [40, 40],
        iconOffset: [0, 25],
      }}
    />
  );
};

export default Track;
