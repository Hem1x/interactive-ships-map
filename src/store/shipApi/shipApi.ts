import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ServerResponse } from '../../models/shipApi';
import { IShip } from '../../models/ship';
import { randomColor } from '../../utils/randomColor';

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
  baseQuery: fetchBaseQuery({ baseUrl: 'https://alexbobr.ru/test_json' }),
  endpoints: (builder) => ({
    getShips: builder.query<IShip[], null>({
      query: () => ({
        url: '',
      }),
      transformResponse: (response: ServerResponse<IShip>) =>
        response.ships.map((el) => ({
          ...el,
          color: randomColor(),
        })),
      providesTags: (result) => providesTags(result),
    }),
  }),
});

export const { useGetShipsQuery } = shipsApi;
