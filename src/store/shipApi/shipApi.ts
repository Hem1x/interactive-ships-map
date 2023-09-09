import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse } from '../../models/shipApi';
import { IShip } from '../../models/ship';
import { randomColor } from '../../utils/randomColor';
import { shipTrack } from '../../models/shipTrack';

const providesTags = (result: IShip[] | undefined) =>
  result
    ? [
        ...result.map(({ id }) => ({ type: 'Ships' as const, id })),
        { type: 'Ships' as const, id: 'LIST' },
      ]
    : [{ type: 'Ships' as const, id: 'LIST' }];

export const shipsApi = createApi({
  reducerPath: 'shipsApi',
  tagTypes: ['Ships'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://64f8dbf9824680fd218025f0.mockapi.io',
  }),
  endpoints: (builder) => ({
    getShips: builder.query<IShip[], null>({
      query: () => ({
        url: 'ships',
      }),
      transformResponse: (response: IShip[]) =>
        response.map((el) => ({
          ...el,
          color: randomColor(),
        })),
      providesTags: (result) => providesTags(result),
    }),
    // getShipTrack: builder.query<shipTrack, null>({
    //   query: () => ({
    //     url: ''
    //   })
    // })
  }),
});

export const { useGetShipsQuery } = shipsApi;
