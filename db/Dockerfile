FROM postgres:15.3-alpine

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=citybikes

COPY /initdb.sql /docker-entrypoint-initdb.d/
COPY journey_data.csv /
COPY station_data.csv /
