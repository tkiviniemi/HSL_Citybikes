# HSL_Citybikes

My take on the Solita's Dev Academy pre-assignment, the assignment can be found here: <https://github.com/solita/dev-academy-2023-exercise>

Purpose of the app is to be able to explore data from journeys made with city bikes in the Helsinki Capital area.

## Getting Started

### Importing the data (2 options)

#### 1. option - Process the data yourself

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
