export interface StationWithStats {
  station_id: number;
  name_fi: string;
  name_sv: string;
  name_en: string;
  address_fi: string;
  address_sv: string;
  city_fi: string;
  city_sv: string;
  capacity: number;
  long: number;
  lat: number;
  departure_statistics: {
    _count: {
      departure_station_id: number;
    };
    _avg: {
      covered_distance: number;
    };
  };
  return_statistics: {
    _count: {
      return_station_id: number;
    };
    _avg: {
      covered_distance: number;
    };
  };
}
