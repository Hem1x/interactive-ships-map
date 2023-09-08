interface Coordinate {
  N: number;
  E: number;
}

interface RouteLocation {
  city: string;
  port: string;
  coordinates: Coordinate;
  time: number;
}

export enum shipEnum {
  icebreaker = 'icebreaker',
  ship = 'ship',
}

export interface IShip {
  id: number;
  type: shipEnum;
  name: string;
  route: {
    from: RouteLocation;
    to: RouteLocation;
    history: [number, number][];
  };
  size: {
    length: number;
    width: number;
  };
  directionDegree: number;
  speed: number;
  status: string;
  coordinates: Coordinate;
  color?: string;
}
