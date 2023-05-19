import express, { Express, Request, Response } from 'express';
import cors from 'cors';

import journeysRouter from './routes/journeys.routes';
import stationsRouter from './routes/stations.routes';

const app: Express = express();
const PORT = process.env.PORT;

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

app.listen(PORT, () => {
  console.log(`Backend is running on port: ${PORT}`);
});
