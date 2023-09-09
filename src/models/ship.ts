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

export interface ShipApiModel {
  id: number;
  name: string; // Название судна
  size_length: number; // Длина
  size_width: number; // Ширина
  speed: number; // Скорость
  status: string; // Статус
  directiondegree: number; // Курс

  route_to_city: string; // Название города куда
  route_to_port: string; // Название порта куда
  route_to_coordinates_n: number; // Координаты куда
  route_to_coordinates_e: number; // Координаты куда
  route_to_time: string; // Приплытие

  route_from_city: string; // Название города откуда
  route_from_port: string; // Название порта откуда
  route_from_coordinates_n: number; // Координаты откуда
  route_from_coordinates_e: number; // Координаты откуда
  route_from_time: string; // Отбытия

  coordinates_e?: number;
  coordinates_n?: number;

  history_1_n?: number;
  history_1_e?: number;

  history_2_e?: number;
  history_2_n?: number;

  history_3_n?: number;
  history_3_e?: number;
}
