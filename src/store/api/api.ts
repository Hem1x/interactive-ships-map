import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRequest, ITable } from '../../models/shipApi';

export const api = createApi({
  reducerPath: 'api',
  tagTypes: ['api'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64f8dbf9824680fd218025f0.mockapi.io',
  }),
  endpoints: (builder) => ({
    getTracks: builder.query<ITable[], null>({
      query: () => ({
        url: '/table',
      }),
      providesTags: ['api'],
    }),
    getRequests: builder.query<IRequest[], null>({
      query: () => ({
        url: '/requests',
      }),
      providesTags: ['api'],
    }),
    postAddRequest: builder.mutation<IRequest, IRequest>({
      query: (obj) => ({
        url: '/requests/new/',
        method: 'POST',
        body: obj,
      }),
      invalidatesTags: ['api'],
    }),
  }),
});

export const { useGetTracksQuery, useGetRequestsQuery, usePostAddRequestMutation } = api;
