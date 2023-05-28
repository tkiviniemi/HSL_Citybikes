import express from 'express';

import { getStations } from '../controllers/stations.controllers';

const stationsRouter = express.Router();

stationsRouter.get('/', getStations);

export default stationsRouter;
