import supertest from 'supertest';
import app from '../index';

describe('GET Journeys endpoint', () => {
  test('should return status code 200', (done) => {
    supertest(app).get('/api/journeys').expect(200).end(done);
  });

  test('should return json data', async () => {
    const response = await supertest(app)
      .get('/api/journeys')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data with all the query params', async () => {
    const response = await supertest(app)
      .get('/api/journeys?page=1&limit=10&sortKey=id&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without page param', async () => {
    const response = await supertest(app)
      .get('/api/journeys?limit=10&sortKey=id&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without limit param', async () => {
    const response = await supertest(app)
      .get('/api/journeys?page=1&sortKey=id&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without sortKey param', async () => {
    const response = await supertest(app)
      .get('/api/journeys?page=1&limit=10&sortOrder=asc')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });

  test('should return json data without sortOrder param', async () => {
    const response = await supertest(app)
      .get('/api/journeys?page=1&limit=10&sortKey=id')
      .set('Accept', 'application/json');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual(
      expect.objectContaining({
        journeyData: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            departure_time: expect.any(String),
            return_time: expect.any(String),
            departure_station_id: expect.any(Number),
            departure_station_name: expect.any(String),
            return_station_id: expect.any(Number),
            return_station_name: expect.any(String),
            covered_distance: expect.any(Number),
            duration: expect.any(Number),
          }),
        ]),
      })
    );
  });
});
