import { IShip } from './models/ship';

export const data: IShip[] = [
  {
    id: 1,
    name: 'SORAKSAN',
    route: {
      from: {
        city: 'VLADIVOSTOK',
        port: 'RUVVO',
        coordinates: {
          N: 43.09344,
          E: 131.91071,
        },
        time: '2024-09-01 09:30 (LT)',
      },
      to: {
        city: 'SHANGHAI',
        port: 'CNSHG',
        coordinates: {
          N: 31.36445,
          E: 121.60415,
        },
        time: '2024-09-08 18:00 (LT)',
      },
      history: [
        [43.09, 131.91],
        [30.09, 135.91],
        [13.09344, 131.91071],
      ],
    },
    size: {
      length: 126,
      width: 18,
    },
    directionDegree: 307,
    speed: 0.1,
    status: 'Going',
    coordinates: {
      N: 13.09344,
      E: 131.91071,
    },
  },
  {
    id: 2,
    name: 'HEING HUI',
    route: {
      from: {
        city: 'SHANGHAI',
        port: 'CNSHG',
        coordinates: {
          N: 31.36445,
          E: 121.60415,
        },
        time: '2024-09-08 18:00 (LT)',
      },
      to: {
        city: 'VLADIVOSTOK',
        port: 'RUVVO',
        coordinates: {
          N: 43.09344,
          E: 131.91071,
        },
        time: '2024-09-01 09:30 (LT)',
      },
      history: [
        [43.09, 131.91],
        [25.09, 124.91],
        [14.09, 128.91],
      ],
    },
    size: {
      length: 100,
      width: 14,
    },
    directionDegree: 107,
    speed: 0.1,
    status: 'Going',
    coordinates: {
      N: 14.09344,
      E: 128.91071,
    },
  },
];
