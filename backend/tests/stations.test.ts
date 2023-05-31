import supertest from 'supertest';
import prisma from '../db/connection';
import app from '../index';

describe('GET Stations endpoint', () => {
  test('should return status code 200', (done) => {
    supertest(app)
      .get('/api/stations?page=1&limit=10&sortKey=station_id&sortOrder=asc')
      .expect(200)
      .end(done);
  });

  test('should return json data', async () => {
    const response = await supertest(app)
      .get('/api/stations?page=1&limit=10&sortKey=station_id&sortOrder=asc')
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
