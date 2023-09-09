import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRequest, ITable } from '../../models/shipApi';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://alexbobr.ru',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<ITable[], null>({
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
  }),
});

export const { useGetTracksQuery, useGetRequestsQuery } = api;
