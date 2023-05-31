import supertest from 'supertest';
import prisma from '../db/connection';
import app from '../index';

describe('GET Stations endpoint', () => {
  test('should return status code 200', (done) => {
    supertest(app).get('/api/stations').expect(200).end(done);
  });

  test('should return json data without params', async () => {
    const response = await supertest(app)
      .get('/api/stations')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.arrayContaining([
          expect.objectContaining({
            station_id: expect.any(Number),
            name_fi: expect.any(String),
            name_sv: expect.any(String),
            name_en: expect.any(String),
            address_fi: expect.any(String),
            address_sv: expect.any(String),
            city_fi: expect.any(String),
            city_sv: expect.any(String),
            capacity: expect.any(Number),
            long: expect.any(Number),
            lat: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without page param', async () => {
    const response = await supertest(app)
      .get('/api/stations?limit=10&sortKey=station_id&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.arrayContaining([
          expect.objectContaining({
            station_id: expect.any(Number),
            name_fi: expect.any(String),
            name_sv: expect.any(String),
            name_en: expect.any(String),
            address_fi: expect.any(String),
            address_sv: expect.any(String),
            city_fi: expect.any(String),
            city_sv: expect.any(String),
            capacity: expect.any(Number),
            long: expect.any(Number),
            lat: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without limit param', async () => {
    const response = await supertest(app)
      .get('/api/stations?page=1&sortKey=station_id&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.arrayContaining([
          expect.objectContaining({
            station_id: expect.any(Number),
            name_fi: expect.any(String),
            name_sv: expect.any(String),
            name_en: expect.any(String),
            address_fi: expect.any(String),
            address_sv: expect.any(String),
            city_fi: expect.any(String),
            city_sv: expect.any(String),
            capacity: expect.any(Number),
            long: expect.any(Number),
            lat: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without sortKey param', async () => {
    const response = await supertest(app)
      .get('/api/stations?page=1&limit=10&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.arrayContaining([
          expect.objectContaining({
            station_id: expect.any(Number),
            name_fi: expect.any(String),
            name_sv: expect.any(String),
            name_en: expect.any(String),
            address_fi: expect.any(String),
            address_sv: expect.any(String),
            city_fi: expect.any(String),
            city_sv: expect.any(String),
            capacity: expect.any(Number),
            long: expect.any(Number),
            lat: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without sortOrder param', async () => {
    const response = await supertest(app)
      .get('/api/stations?page=1&limit=10&sortKey=station_id')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.arrayContaining([
          expect.objectContaining({
            station_id: expect.any(Number),
            name_fi: expect.any(String),
            name_sv: expect.any(String),
            name_en: expect.any(String),
            address_fi: expect.any(String),
            address_sv: expect.any(String),
            city_fi: expect.any(String),
            city_sv: expect.any(String),
            capacity: expect.any(Number),
            long: expect.any(Number),
            lat: expect.any(Number),
          }),
        ]),
      })
    );
  });
});

describe('GET Station by ID endpoint', () => {
  test('should return status code 200', (done) => {
    supertest(app).get('/api/stations/1').expect(200).end(done);
  });

  test('should return json data', async () => {
    const response = await supertest(app)
      .get('/api/stations/1')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        stationData: expect.objectContaining({
          station_id: expect.any(Number),
          name_fi: expect.any(String),
          name_sv: expect.any(String),
          name_en: expect.any(String),
          address_fi: expect.any(String),
          address_sv: expect.any(String),
          city_fi: expect.any(String),
          city_sv: expect.any(String),
          capacity: expect.any(Number),
          long: expect.any(Number),
          lat: expect.any(Number),
          departure_statistics: {
            _count: {
              departure_station_id: expect.any(Number),
            },
            _avg: {
              covered_distance: expect.any(Number),
            },
          },
          return_statistics: {
            _count: {
              return_station_id: expect.any(Number),
            },
            _avg: {
              covered_distance: expect.any(Number),
            },
          },
        }),
      })
    );
  });

  test('should return 404 if queried with non-existent ID', async () => {
    const response = await supertest(app)
      .get('/api/stations/11111')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(404);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        error: 'Station not found',
      })
    );
  });

  test('should return 400 if queried with invalid ID', async () => {
    const response = await supertest(app)
      .get('/api/stations/test')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(400);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        error: 'Invalid ID supplied',
      })
    );
  });
});
