export interface Journey {
  id: number;
  departure_time: Date;
  return_time: Date;
  departure_station_id: number;
  departure_station_name: string;
  return_station_id: number;
  return_station_name: string;
  covered_distance: number;
  duration: number;
}
