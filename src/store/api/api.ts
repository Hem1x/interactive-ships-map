import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { shipTrackAPI } from '../../models/shipTrack';
import { IRequest } from '../../models/shipApi';
import { ShipApiModel } from '../../models/ship';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://alexbobr.ru',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<shipTrackAPI[], null>({
      query: () => ({
        url: '/table/',
      }),
      providesTags: ['api'],
    }),
    getRequests: builder.query<IRequest[], null>({
      query: () => ({
        url: '/requests/',
      }),
      transformResponse: (response: IRequest[]) => response.slice(1),
      providesTags: ['api'],
    }),
    getShips: builder.query<ShipApiModel[], null>({
      query: () => ({
        url: '/ships/',
      }),
      transformResponse: (response: ShipApiModel[]) => response.slice(1),
      providesTags: ['api'],
    }),
  }),
});

export const { useGetTracksQuery, useGetRequestsQuery, useGetShipsQuery } = api;
