import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import journeysRouter from './routes/journeys.routes';
import stationsRouter from './routes/stations.routes';

const app: Express = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);

app.use('/api/journeys', journeysRouter);
app.use('/api/stations', stationsRouter);

app.get('/health', (req: Request, res: Response) => {
  res.send('OK');
});

export default app;
