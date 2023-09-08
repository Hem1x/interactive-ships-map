export interface IRoute {
  type: string;
  features: Line[];
}

export interface Line {
  type: string;
  properties: {
    id: number;
  };
  geometry: {
    type: string;
    coordinates: [number, number][];
  };
}

export const routeLines: IRoute = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        id: 1,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [69.93030017617484, 46.142578125],
          [70.4367988185464, 57.74414062500001],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 2,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [70.4367988185464, 57.74414062500001],
          [73.53462847039683, 66.20361328125],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 3,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [73.53462847039683, 66.20361328125],
          [73.77577986189993, 71.54296874999999],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 4,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [69.93030017617484, 46.142578125],
          [76.2059670431415, 55.01953125],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 5,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [76.2059670431415, 55.01953125],
          [77.44694030325893, 68.90625],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 6,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [77.44694030325893, 68.90625],
          [73.77577986189993, 71.54296874999999],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 7,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [73.77577986189993, 71.54296874999999],
          [72.76406472320436, 73.125],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 8,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [72.76406472320436, 73.125],
          [72.63337363853837, 74.02587890625],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 9,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [72.63337363853837, 74.02587890625],
          [72.0739114882038, 72.92724609375],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 10,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [72.0739114882038, 72.92724609375],
          [71.30783606806223, 72.59765625],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 11,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [71.30783606806223, 72.59765625],
          [71.24435551310674, 72.2021484375],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 12,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [71.30783606806223, 72.59765625],
          [70.9722375547307, 73.32275390625],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 13,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [70.9722375547307, 73.32275390625],
          [71.03303495416577, 73.7127685546875],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {
        id: 14,
      },
      geometry: {
        type: 'LineString',
        coordinates: [
          [70.9722375547307, 73.32275390625],
          [68.66455067163206, 73.52874755859375],
        ],
      },
    },
  ],
};
