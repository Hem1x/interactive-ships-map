export interface shipTrackAPI {
  id_request: number;
  ledocol: number;
  ship: number;
  point_begin: string;
  point_end: string;
  date_begin: string;
  date_end: string;
}

export interface shipTrack
  extends Omit<shipTrackAPI, 'date_begin' | 'date_end' | 'point_begin' | 'point_end'> {
  date_begin: Date;
  date_end: Date;
  point_begin: [number, number] | undefined;
  point_end: [number, number] | undefined;
}
