export interface ServerResponse<T> {
  ships: T[];
}

export interface IRequest {
  name: string;
  imo: number;
  led_class: string;
  speed: number;
  date_begin: string;
  date_end: string;
  point_begin: string;
  point_end: string;
  color?: string;
}
