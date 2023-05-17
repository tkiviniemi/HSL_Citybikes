CREATE DATABASE hsl_citybikes;

\connect hsl_citybikes;

CREATE SCHEMA citybikes_schema;

CREATE TABLE citybikes_schema.journeys (
    id SERIAL PRIMARY KEY,
    departure_time TIMESTAMP NOT NULL,
    return_time TIMESTAMP NOT NULL,
    departure_station_id INT NOT NULL,
    departure_station_name VARCHAR(255) NOT NULL,
    return_station_id INT NOT NULL,
    return_station_name VARCHAR(255) NOT NULL,
    covered_distance FLOAT NOT NULL,
    duration INT NOT NULL
);

CREATE TABLE citybikes_schema.stations (
    station_id INT NOT NULL PRIMARY KEY,
    name_fi VARCHAR(255) NOT NULL,
    name_sv VARCHAR(255) NOT NULL,
    name_en VARCHAR(255) NOT NULL,
    address_fi VARCHAR(255) NOT NULL,
    address_sv VARCHAR(255) NOT NULL,
    city_fi VARCHAR(255) NOT NULL,
    city_sv VARCHAR(255) NOT NULL,
    capacity INT NOT NULL,
    long FLOAT NOT NULL,
    lat FLOAT NOT NULL
);

ALTER DATABASE hsl_citybikes OWNER TO postgres;
GRANT ALL PRIVILEGES ON DATABASE hsl_citybikes TO postgres;

COPY citybikes_schema.journeys (departure_time, return_time, departure_station_id, departure_station_name, return_station_id, return_station_name, covered_distance, duration) FROM '/journey_data.csv' DELIMITER ',' CSV HEADER;

COPY citybikes_schema.stations (station_id, name_fi, name_sv, name_en, address_fi, address_sv, city_fi, city_sv, capacity, long, lat) FROM '/station_data.csv' DELIMITER ',' CSV HEADER;
