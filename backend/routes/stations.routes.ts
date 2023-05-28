import express from 'express';

import {
  getStations,
  getStationById,
} from '../controllers/stations.controllers';

const stationsRouter = express.Router();

stationsRouter.get('/', getStations);
stationsRouter.get('/:id', getStationById);

export default stationsRouter;
