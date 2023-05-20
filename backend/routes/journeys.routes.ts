import express from 'express';

import { getJourneys } from '../controllers/journeys.controllers';

const journeysRouter = express.Router();

journeysRouter.get('/', getJourneys);

export default journeysRouter;
