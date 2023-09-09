export enum shipEnum {
  icebreaker = 'icebreaker',
  ship = 'ship',
}
export interface ServerResponse<T> {
  ships: T[];
}

export interface IRequest {
  id?: number;
  is_ledocol?: boolean;
  name: string;
  imo: number;
  led_class: string;
  speed: number;

  date_begin: string;
  point_begin: string;

  date_end: string;
  point_end: string;
}

export interface ITable {
  id: number;
  id_request: number;

  is_ledocol: true;
  ship: number;
  ledocol: number;

  date_begin: string;
  point_begin: string;

  date_end: string;
  point_end: string;
}
