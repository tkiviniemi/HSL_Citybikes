# HSL_Citybikes

My take on the Solita's Dev Academy pre-assignment, the assignment can be found here: <https://github.com/solita/dev-academy-2023-exercise>

Purpose of the app is to be able to explore data from journeys made with city bikes in the Helsinki Capital area.

## Technology stack used

- Frontend

  - React
  - TailwindCSS
  - TypeScript

<br>

- Backend
  - TypeScript
  - Express
  - Prisma
  - PostgreSQL
  - Docker

## Dependencies

- Docker Desktop
- Node
- Python and it's Pandas library (if processing the data yourself)

## Getting Started

### Importing the data (2 options)

#### 1. Option - Process the data yourself

- Download the three csv files below and move them to `data` folder

  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
  - <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>
  - <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

- Run `preprocess_data.py` file in the `data` folder to process the downloaded data. This script drops journeys with less than 10 second duration or less than 10 meters travelled and refactors some names to make them more uniform.
- The script creates two csv files into the database folder `db`, one for the journeys and one for the stations.

#### 2. Option - Download already processed data

- Download already processed csv files from dropbox:
  - <https://www.dropbox.com/scl/fo/8s5h7cmy3jik1e8ws1wvq/h?dl=0&rlkey=33cebithff08993fk0wi9m8a0>
- Place `station_data.csv` and `journey_data.csv` files into `db` folder

## API Documentation

### GET

- `/api/journeys?page={page}&limit={limit}&sortKey={sortKey}&sortOrder={sortOrder}`

  - Fetches all journeys
  - Query Parameters
    - `page`(mandatory, default = 1): Determines how many journeys in the list should be skipped
    - `limit`(mandatory, default = 10): Determines how many journeys are returned
    - `orderKey`(mandatory, default = id): Determines by which column the returned journeys are sorted
    - `orderBy`(mandatory, default = asc): Determines if sort order is ascending or descending
  - Example of a returned object (used query: `/api/journeys?page=2&limit=20&sortKey=id&sortOrder=asc`):
    ```json
    {
      "journeyData": [
        {
          "id": 21,
          "departure_time": "2021-05-31T23:46:13.000Z",
          "return_time": "2021-05-31T23:55:22.000Z",
          "departure_station_id": 137,
          "departure_station_name": "Arabian kauppakeskus",
          "return_station_id": 118,
          "return_station_name": "Fleminginkatu",
          "covered_distance": 1952,
          "duration": 544
        },
        ...18 more objects...
        {
          "id": 40,
          "departure_time": "2021-05-31T23:33:58.000Z",
          "return_time": "2021-05-31T23:49:52.000Z",
          "departure_station_id": 1,
          "departure_station_name": "Kaivopuisto",
          "return_station_id": 57,
          "return_station_name": "Lauttasaaren ostoskeskus",
          "covered_distance": 4515,
          "duration": 954
        }
      ]
    }
    ```

* `/api/stations?page={page}&limit={limit}&sortKey={sortKey}&sortOrder={sortOrder}`
  - Fetches all stations
  - Query Parameters
    - `page`(mandatory, default = 1): Determines how many stations in the list should be skipped
    - `limit`(mandatory, default = 10): Determines how many stations are returned
    - `orderKey`(mandatory, default = station_id): Determines by which column the returned stations are sorted
    - `orderBy`(mandatory, default = asc): Determines if sort order is ascending or descending
  - Example of a returned object (used query: `/api/stations?page=1&limit=10&sortKey=name_fi&sortOrder=desc`):
    ```json
    {
      "stationData": [
        {
          "station_id": 41,
          "name_fi": "Ympyrätalo",
          "name_sv": "Runda huset",
          "name_en": "Ympyrätalo",
          "address_fi": "Porthaninrinne 1",
          "address_sv": "Porthansbrinken 1",
          "city_fi": "Helsinki",
          "city_sv": "Helsingfors",
          "capacity": 36,
          "long": 24.949399999845,
          "lat": 60.1808629918822
        },
        ...8 more objects...
        {
          "station_id": 242,
          "name_fi": "Von Daehnin katu",
          "name_sv": "Von Daehns gata",
          "name_en": "Von Daehnin katu",
          "address_fi": "Von Daehnin katu 14",
          "address_sv": "Von Daehns gata 14",
          "city_fi": "Helsinki",
          "city_sv": "Helsingfors",
          "capacity": 14,
          "long": 25.0436178847114,
          "lat": 60.2303443513437
        }
      ]
    }
    ```

- `/api/stations/:station_id`

  - Fetches a single station by its `id` with statistics about the station
  - Example of a returned object (used query: `/api/stations/1`):
    ```json
    {
      "stationData": {
        "station_id": 1,
        "name_fi": "Kaivopuisto",
        "name_sv": "Brunnsparken",
        "name_en": "Kaivopuisto",
        "address_fi": "Meritori 1",
        "address_sv": "Havstorget 1",
        "city_fi": "Helsinki",
        "city_sv": "Helsingfors",
        "capacity": 30,
        "long": 24.9502114714031,
        "lat": 60.155369615074,
        "departure_statistics": {
          "_count": {
            "departure_station_id": 11901
          },
          "_avg": {
            "covered_distance": 3354.460661288967
          }
        },
        "return_statistics": {
          "_count": {
            "return_station_id": 12144
          },
          "_avg": {
            "covered_distance": 2987.060002470356
          }
        }
      }
    }
    ```
